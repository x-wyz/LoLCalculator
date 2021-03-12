import React from 'react';

import './calcbasic.css';

const CalcBasic = ({ ally, enemy }) => {

	let ap = ally.ap;

	// If this formula is incorrect also change the one in calc skill
	const eArmor = enemy.armor * (1 - (ally.arpen / 100)) - (ally.lethality * (0.6 + 0.4 * ally.lv / 18));
	const eResist = enemy.resist * (1 - (ally.mpen / 100)) - ally.flatMPen;
	let enemyArmorMultiplier = 100/(100+eArmor);
	let enemyResistMultiplier = 100/(100+eResist);

	// potential on-hit effects
	const items = [];
	let infinity = false;
	let ruinedking = false;
	let rocksolid = 0;
	let recurve = 0;
	let nashors = 0;
	let fray = 0;
	let titanic = 0;
	let wrath = 0;

	if (ally.itemEffects !== undefined) {
		ally.itemEffects.forEach(buff => {
			switch(buff.name){
				case "infinity":
					infinity = ally.critChance >= 60 ? true : false;
					items.push(buff.item);
					break;
				case "deathcap":
					ap *= 1.3;
					break;
				case "recurve":
					recurve = 15 * enemyArmorMultiplier
					items.push(buff.item);
					break;
				case "nashors":
					nashors = ((15 + .2 * ap) * enemyResistMultiplier);
					items.push(buff.item);
					break;
				case "fray":
					fray = ((15 + 65 / 17 * (ally.lv - 1)) * enemyResistMultiplier)
					items.push(buff.item);
					break;
				case "rocksolid":
					rocksolid = (5 * (enemy.hp / 1000)).toFixed(0);
					items.push(buff.item);
					break;
				case "ruinedking":
					ruinedking = true;
					items.push(buff.item);
					break;
				case "titanic":
					titanic = (5 + (ally.hp * 0.015)) * enemyArmorMultiplier;
					items.push(buff.item);
					break;
				case "wrath":
					wrath = 1;
					items.push(buff.item);
					break;
				case "wrath2":
					wrath = 2;
					items.push(buff.item);
					break;
				default:
					break;
			}
		})
	}

	let critDamage = infinity === true ? ally.critDamage + 35 : ally.critDamage;

	let basicDamage = ally.attack * enemyArmorMultiplier;
	let basicCritical = basicDamage * (critDamage / 100);

	let critChance = ally.critChance < 0 ? 0 : ally.critChance > 100 ? 100 : ally.critChance;

	let avgDamage = parseInt(basicDamage) + ((basicCritical - basicDamage)/100) * critChance;

	let normalDamage = ((basicDamage + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);
	let criticalDamage = ((basicCritical + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);
	let averageDamage = critChance === 0 ? normalDamage : ((avgDamage + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);

	let normalCount = 0;
	let criticalCount = 0;
	let averageCount = 0;

	for (let enemyLife = enemy.hp; enemyLife > 0; ){
		if (ruinedking) {
			normalCount++;
			enemyLife -= (parseInt(normalDamage) + ((enemyLife * .1) * enemyArmorMultiplier))
		}
		else {
			normalCount++;
			enemyLife -= normalDamage;
		}
	}

	for (let enemyLife = enemy.hp; enemyLife > 0; ){
		if (ruinedking) {
			criticalCount++;
			enemyLife -= (parseInt(criticalDamage) + ((enemyLife * .1) * enemyArmorMultiplier))
		}
		else {
			criticalCount++;
			enemyLife -= criticalDamage;
		}
	}

	for (let enemyLife = enemy.hp; enemyLife > 0; ){
		if (ruinedking) {
			averageCount++;
			console.log(typeof averageDamage)
			enemyLife -= (parseInt(averageDamage) + ((enemyLife * .1) * enemyArmorMultiplier))
		}
		else {
			averageCount++;
			enemyLife -= averageDamage;
		}
	}

	return (
		<div className="calc-basic-container">
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-norm">
					<h4 className="calc-basic-header">Normal</h4>
					<p className="calc-basic-content">{normalDamage} <span className="calc-basic-percentage">[ {((normalDamage / enemy.hp) * 100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{normalCount}</p>
				</div>
			</div>
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-crit">
					<h4 className="calc-basic-header">Crit</h4>
					<p className="calc-basic-content">{criticalDamage} <span className="calc-basic-percentage">[ {((criticalDamage / enemy.hp) * 100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{criticalCount}</p>
				</div>
			</div>
			<div className="basic-calculations">
				<div className="calc-basic-damage cb-avg">
					<h4 className="calc-basic-header">Average</h4>
					<p className="calc-basic-content">{averageDamage} <span className="calc-basic-percentage">[ {((averageDamage / enemy.hp)*100).toFixed(1)}% ]</span></p>
				</div>
				<div className="calc-basic-damage calc-basic-count">
					<h4 className="calc-basic-header">Count</h4>
					<p className="calc-basic-content">{averageCount}</p>
				</div>
			</div>
		</div>
	)
}

export default CalcBasic;
