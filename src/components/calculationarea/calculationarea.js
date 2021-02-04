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
			enemyTab: false,
			ally: this.props.ally,
			enemy: this.props.enemy
		}
	}

	switchTab(bool){
		if (bool === true) {
			this.setState({
				enemyTab: bool,
				ally: this.props.enemy,
				enemy: this.state.ally
			})
		}
		else {
			this.setState({
				enemyTab: bool,
				ally: this.props.ally,
				enemy: this.props.enemy
			})
		}
	}

	render(){
		const { enemyTab, ally, enemy } = this.state;
		console.log(ally, enemy)

		return (
			<div className="calculation-area">
				<header className="calculation-header">
					<h3 onClick={() => this.switchTab(false)} className={`allied-tab ${enemyTab ? 'not-current-tab' : null}`}>Ally</h3>
					<h3 onClick={() => this.switchTab(true)} className={`enemy-tab ${!enemyTab ? 'not-current-tab' : null}`}>Enemy</h3>
				</header>
				<div className="calculation-body">
					<h3 className="calculation-heading">Basic</h3>
					<CalcBasic ally={ally} enemy={enemy} />
					<h3 className="calculation-heading">Skills</h3>
					<div className="calculation-skills">
						{
							// Reminder: put ally and enemy stats as one argument instead of splitting between potentially 10s ** 
							// have CalcSkill component worry about which stats it needs.
						}
						{
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
