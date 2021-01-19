import React from 'react';

import './calcbasic.css';

const CalcBasic = ({ ally, enemy }) => {

	let basicDamage = ally.attack * 100/(100+enemy.armor);
	basicDamage = basicDamage.toFixed(0);

	let basicCritical = basicDamage * (ally.critDamage / 100);

	let average = Math.ceil(enemy.hp / (basicDamage * (1 + (ally.critDamage / 100) * ally.critChance)));

	return (
		<div className="calc-basic-container">
			<p className="calc-basic">Normal basic attacks: {basicDamage} [<span className="percentage">{(basicDamage/enemy.hp * 100).toFixed(1)}%</span>] </p>

			<p className="calc-basic">Critical basic attacks: {basicCritical} [<span className="percentage">{(basicCritical/enemy.hp * 100).toFixed(1)}%</span>]</p>

			<p className="calc-basic">It takes an average of {average} basic attack{average === 1 ? null : 's'} to deal {enemy.hp} damage.</p>
		</div>
	)
}

export default CalcBasic;
