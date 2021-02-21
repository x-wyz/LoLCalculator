import React, { Component } from 'react';

import CalcSkill from '../calcskill/calcskill';
import CalcBasic from '../calcbasic/calcbasic';
import CalcSummoners from '../calcsummoners/calcsummoners';
import CalcItem from '../calcitem/calcitem';

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
							enemy.abilities.map((ability, idx) => <CalcSkill ally={enemy} enemy={ally} skill={ability} skillLv={enemy[`abilitylv${ability.skill}`]} />)
							:
							ally.abilities.map((ability, idx) => <CalcSkill ally={ally} enemy={enemy} skill={ability} skillLv={ally[`abilitylv${ability.skill}`]} />)
						}
					</div>
					<h3 className="calculation-heading">Runes</h3>
					<CalcDamageRunes ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					<h3 className="calculation-heading">Summoners</h3>
					<CalcSummoners ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					<h3 className="calculation-heading">Items</h3>
					<div className="calculation-skills">
						{
							enemyTab === true
							?
							enemy.items.map((item) => {
								if (item.img !== undefined){
									try{
										if (item.effect.type === "damage"){
											return <CalcItem item={item} ally={enemy} enemy={ally}/>
										}
									}
									catch {
										return;
									}
								}
							})
							:
							ally.items.map((item) => {
								if (item.img !== undefined){
									try {
										if (item.effect.type === "damage"){
											return <CalcItem item={item} ally={ally} enemy={enemy} />
										}
									}
									catch {
										return;
									}
								}
								
							})
						}
					</div>
					<div className="calculation-end"></div>
				</div>
			</div>
		)
	}
}

export default CalculationArea;
