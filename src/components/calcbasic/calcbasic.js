import React from 'react';

import './calcbasic.css';

const CalcBasic = ({ ally, enemy }) => {

	let basicDamage = ally.attack * 100/(100+enemy.armor);
	basicDamage = basicDamage.toFixed(0);

	let basicCritical = basicDamage * (ally.critDamage / 100);
	basicCritical = basicCritical.toFixed(0)

	let critChance = ally.critChance < 0 ? 0 : ally.critChance > 100 ? 100 : ally.critChance;

	let avgDamage = parseInt(basicDamage) +((basicCritical - basicDamage)/100) * critChance;
	let average = Math.ceil(enemy.hp / avgDamage);

	return (
		<div className="calc-basic-container">
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-norm">
					<h4 className="calc-basic-header">Normal</h4>
					<p className="calc-basic-content">{basicDamage} <span className="calc-basic-percentage">[ {((basicDamage / enemy.hp) * 100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{Math.ceil(enemy.hp / basicDamage)}</p>
				</div>
			</div>
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-crit">
					<h4 className="calc-basic-header">Crit</h4>
					<p className="calc-basic-content">{basicCritical} <span className="calc-basic-percentage">[ {((basicCritical / enemy.hp) * 100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{Math.ceil(enemy.hp / basicCritical)}</p>
				</div>
			</div>
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-avg">
					<h4 className="calc-basic-header">Average</h4>
					<p className="calc-basic-content">{avgDamage.toFixed(0)} <span className="calc-basic-percentage">[ {((avgDamage / enemy.hp)*100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{average}</p>
				</div>
			</div>
		</div>
	)
}

export default CalcBasic;
