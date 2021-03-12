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

	forceSwitch(){
		this.setState({enemyTab: false})
	}

	render(){
		const { ally, enemy, dummy } = this.props;
		const { enemyTab } = this.state;

		if (enemyTab && dummy){
			this.switchTab(false)
		}

		return (
			<div className="calculation-area">
				<header className="calculation-header">
					<h3 onClick={() => this.switchTab(false)} className={`allied-tab ${enemyTab ? 'not-current-tab' : null}`}>Ally</h3>
					<h3 onClick={dummy === true? null : () => this.switchTab(true)} className={`enemy-tab ${!enemyTab ? 'not-current-tab' : null} ${dummy ? "dummy-tab" : null}`}>Enemy</h3>
				</header>
				<div className="calculation-body">
					<h3 className="calculation-heading">Basic Attacks</h3>
					<CalcBasic ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					<h3 className="calculation-heading">Skills</h3>
					<div className="calculation-skills">
						{
							dummy && enemyTab
							? 
							null
							:
							enemyTab === true
							?
							enemy.abilities.map((ability, idx) => <CalcSkill ally={enemy} enemy={ally} skill={ability} skillLv={enemy[`ability${ability.skill}`]} />)
							:
							ally.abilities.map((ability, idx) => <CalcSkill ally={ally} enemy={enemy} skill={ability} skillLv={ally[`ability${ability.skill}`]} />)
						}
					</div>
					<h3 className="calculation-heading">Runes</h3>
					{
						dummy && enemyTab
						? 
						null
						:
						<CalcDamageRunes ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					}
					<h3 className="calculation-heading">Summoners</h3>
					{
						dummy && enemyTab
						? 
						null
						:
						<CalcSummoners ally={enemyTab ? enemy : ally} enemy={enemyTab ? ally : enemy} />
					}
					<h3 className="calculation-heading">Items</h3>
					<div className="calculation-skills">
						{
							dummy && enemyTab 
							? 
							null
							:
							enemyTab === true
							?
							enemy.items
							.filter(item => item.img !== undefined && item.effect !== undefined)
							.filter(item => item.effect.type === "damage")
							.map((item) => <CalcItem item={item} ally={enemy} enemy={ally}/>)
							:
							ally.items
							.filter(item => item.img !== undefined && item.effect !== undefined)
							.filter(item => item.effect.type === "damage")
							.map((item) => <CalcItem item={item} ally={ally} enemy={enemy}/>)
						}
						<div className="uncalculated-item-info-container">
							{
								dummy && enemyTab
								?
								null
								:
								enemyTab === true
								?
								enemy.items
								.filter(item => item.img !== undefined && item.uncalculated !== undefined)
								.map(item => <p className="uncalculated-item-info">{item.uncalculated.note}</p>)
								:
								ally.items
								.filter(item => item.img !== undefined && item.uncalculated !== undefined)
								.map(item => <p className="uncalculated-item-info">{item.uncalculated.note}</p>)
							}
						</div>
					</div>
					<div className="calculation-end"></div>
				</div>
			</div>
		)
	}
}

export default CalculationArea;
