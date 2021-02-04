import React, { Component } from 'react';

import CalcSkill from '../calcskill/calcskill';
import CalcBasic from '../calcbasic/calcbasic';
import CalcSummoners from '../calcsummoners/calcsummoners';

import CalcDamageRunes from '../calcdamagerunes/calcdamagerunes';

import './calculationarea.css';

class CalculationArea extends Component {
	constructor(props){
		super(props);
		this.state = {
			enemyTab: false
		}
	}

	switchTab(bool){
		this.setState({
			enemyTab: bool
		})
	}

	render(){
		const { ally, enemy } = this.props;
		const { enemyTab } = this.state;

		return (
			<div className="calculation-area">
				<header className="calculation-header">
					<h3 onClick={() => this.switchTab(false)} className={`allied-tab ${enemyTab ? 'not-current-tab' : null}`}>Ally</h3>
					<h3 onClick={() => this.switchTab(true)} className={`enemy-tab ${!enemyTab ? 'not-current-tab' : null}`}>Enemy</h3>
				</header>
				<div className="calculation-body">
					<h3 className="calculation-heading">Basic</h3>
					<CalcBasic ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					<h3 className="calculation-heading">Skills</h3>
					<div className="calculation-skills">
						{
							enemyTab === true
							?
							enemy.abilities.map((ability, idx) => <CalcSkill 
								icon={ability.rname} ratio={ability.ratio} enemyHp={enemy.hp} enemyAr={enemy.armor} enemyRes={enemy.resist} 
								scale={ability.scale} damageType={ability.damage} ad={enemy.attack} ap={enemy.ap}
								base={ability.base[enemy[`abilitylv${idx+1}`]]}
								/>)
							:
							ally.abilities.map((ability, idx) => <CalcSkill 
								icon={ability.rname} ratio={ability.ratio} enemyHp={enemy.hp} enemyAr={enemy.armor} enemyRes={enemy.resist} 
								scale={ability.scale} damageType={ability.damage} ad={ally.attack} ap={ally.ap}
								base={ability.base[ally[`abilitylv${idx+1}`]]}
								/>)
						}
					</div>
					<h3 className="calculation-heading">Runes</h3>
					<CalcDamageRunes ally={ally} enemy={enemy} />
					<h3 className="calculation-heading">Summoners</h3>
					<CalcSummoners ally={ally} enemy={enemy} />
					<h3 className="calculation-heading">Items</h3>
					<div className="calculation-end"></div>
				</div>
			</div>
		)
	}
}

export default CalculationArea;
