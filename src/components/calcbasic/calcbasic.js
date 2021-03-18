import React from 'react';
import { calculateBasic } from '../../data/functions'; 

import './calcbasic.css';

const CalcBasic = ({ ally, enemy }) => {

	const basicvalues = calculateBasic(ally, enemy);
	console.log(basicvalues)
	// potential on-hit effects
	const items = [];

	if (basicvalues.items !== undefined && basicvalues.items.length > 0){
		basicvalues.items.forEach(item => items.push(item[item.length - 1]))
	}

	return (
		<React.Fragment>
			<div className="calc-basic-container">
				<div className="basic-calculations">
					<div className="calc-basic-damage cb-norm">
						<h4 className="calc-basic-header">Normal</h4>
						<p className="calc-basic-content">{basicvalues.normal.toFixed(0)} <span className="calc-basic-percentage">[ {basicvalues.normalPercentage.toFixed(1)}% ]</span></p>
					</div>
					<div className="calc-basic-damage calc-basic-count">
						<h4 className="calc-basic-header">Count</h4>
						<p className="calc-basic-content">{basicvalues.normalCount}</p>
					</div>
				</div>
				<div className="basic-calculations">
					<div className="calc-basic-damage cb-crit">
						<h4 className="calc-basic-header">Crit</h4>
						<p className="calc-basic-content">{basicvalues.crit.toFixed(0)} <span className="calc-basic-percentage">[ {basicvalues.critPercentage.toFixed(1)}% ]</span></p>
					</div>
					<div className="calc-basic-damage calc-basic-count">
						<h4 className="calc-basic-header">Count</h4>
						<p className="calc-basic-content">{basicvalues.critCount}</p>
					</div>
				</div>
				<div className="basic-calculations">
					<div className="calc-basic-damage cb-avg">
						<h4 className="calc-basic-header">Average</h4>
						<p className="calc-basic-content">{basicvalues.average.toFixed(0)} <span className="calc-basic-percentage">[ {basicvalues.averagePercentage.toFixed(1)}% ]</span></p>
					</div>
					<div className="calc-basic-damage calc-basic-count">
						<h4 className="calc-basic-header">Count</h4>
						<p className="calc-basic-content">{basicvalues.averageCount}</p>
					</div>
				</div>
				<div className="basic-calculations stat-breakdown">
					<div className="calc-basic-damage cb-avg">
						<h4 className="calc-basic-header">Breakdown</h4>
						<div className="basic-stat-breakdown">
							{
								basicvalues.items !== undefined
								?
								basicvalues.items.map(item => {
									return (
										<div className="breakdown-container">
											<p className="breakdown-description">{item[0]}</p>
											<p className="breakdown-value">{item[0] === "BOTRK" ? (item[1] === "ranged" ? "6%" : "10%") : item[1]}</p>
										</div>
									)
								})
								:
								null
							}
						</div>
						<div className="basic-stat-breakdown">
							<div className="breakdown-container">
								<p className="breakdown-description">Base</p>
								<p className="breakdown-value">{basicvalues.basic}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Crit Chance</p>
								<p className="breakdown-value">{ally.critChance}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Crit Damage</p>
								<p className="breakdown-value">{ally.critDamage.toFixed(1)}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Armor</p>
								<p className="breakdown-value">x{basicvalues.armorMultiplier.toFixed(2)}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Magic Resist</p>
								<p className="breakdown-value">x{basicvalues.resistMultiplier.toFixed(2)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${items.length > 0 ? null : "hidden"} basic-calc-item-effect-list`}>
				{
				basicvalues.items !== undefined
				?
				`Currently applying on attack effects from ${items.join(", ")}.`
				:
				null
				}
			</div>
		</React.Fragment>
	)
}

export default CalcBasic;
