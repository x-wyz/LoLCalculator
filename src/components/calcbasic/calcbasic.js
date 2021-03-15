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
	let nashors = false;
	let fray = 0;
	let titanic = 0;
	let wrath = 0;

	console.log(enemy.resist)

	let wrathDamage = 0;

	if (ally.itemEffects !== undefined) {
		ally.itemEffects.forEach(buff => {
			switch(buff.name){
				case "infinity":
					infinity = ally.critChance >= 60 ? true : false;
					if (infinity) {
						items.push(buff.item);
					}
					break;
				case "deathcap":
					ap *= 1.3;
					break;
				case "recurve":
					recurve = 15 * enemyArmorMultiplier
					items.push(buff.item);
					break;
				case "nashors":
					nashors = true;
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

	if (nashors === true) {
		// to ensure deathcap gets applied before nashors calc
		nashors = ((15 + .2 * ap) * enemyResistMultiplier)
	}

	let critDamage = infinity === true ? ally.critDamage + 35 : ally.critDamage;

	let basicDamage = ally.attack * enemyArmorMultiplier;
	let basicCritical = basicDamage * (critDamage / 100);

	let critChance = ally.critChance < 0 ? 0 : ally.critChance > 100 ? 100 : ally.critChance;

	let avgDamage = parseInt(basicDamage) + ((basicCritical - basicDamage)/100) * critChance;

	let normalDamage = ((basicDamage + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);
	let criticalDamage = ((basicCritical + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);
	let averageDamage = critChance === 0 ? normalDamage : critChance === 100 ? criticalDamage : ((avgDamage + recurve + titanic + fray + nashors) - rocksolid).toFixed(0);

	let normalCount = 0;
	let criticalCount = 0;
	let averageCount = 0;

	let blade = ally.range === "melee" ? 0.1 : 0.06;

	console.log(ally.armor)
	console.log(enemy.armor)

	for (let enemyLife = enemy.hp; enemyLife > 0; ){
		if (ruinedking) {
			normalCount++;
			enemyLife -= (parseInt(normalDamage) + ((enemyLife * blade) * enemyArmorMultiplier))
		}
		else {
			normalCount++;
			enemyLife -= normalDamage;
		}
	}

	for (let enemyLife = enemy.hp; enemyLife > 0; ){
		if (ruinedking) {
			criticalCount++;
			enemyLife -= (parseInt(criticalDamage) + ((enemyLife * blade) * enemyArmorMultiplier))
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
			enemyLife -= (parseInt(averageDamage) + ((enemyLife * blade) * enemyArmorMultiplier))
		}
		else {
			averageCount++;
			enemyLife -= averageDamage;
		}
	}

	return (
		<React.Fragment>
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
				<div className="basic-calculations stat-breakdown">
					<div className="calc-basic-damage cb-avg">
						<h4 className="calc-basic-header">Breakdown</h4>
						<div className="basic-stat-breakdown">
							{
								ruinedking === true
								?
								<div className="breakdown-container">
									<p className="breakdown-description">BOTRK</p>
									<p className="breakdown-value">{blade*100}%</p>
								</div>
								:
								null
							}
							{
								wrath === 1
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Rageknife</p>
									<p className="breakdown-value">{wrathDamage}</p>
								</div>
								:
								null
							}
							{
								wrath === 1
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Rageblade</p>
									<p className="breakdown-value">{wrathDamage}</p>
								</div>
								:
								null
							}
							{
								recurve > 0
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Recurve Bow</p>
									<p className="breakdown-value">{recurve.toFixed(1)}</p>
								</div>
								:
								null
							}
							{
								nashors > 0
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Nashors</p>
									<p className="breakdown-value">{nashors.toFixed(1)}</p>
								</div>
								:
								null
							}
							{
								fray > 0
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Wit's End</p>
									<p className="breakdown-value">{fray.toFixed(1)}</p>
								</div>
								:
								null
							}
							{
								titanic > 0
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Titanic</p>
									<p className="breakdown-value">{recurve.toFixed(1)}</p>
								</div>
								:
								null
							}
							{
								rocksolid > 0
								?
								<div className="breakdown-container">
									<p className="breakdown-description">Rocksolid</p>
									<p className="breakdown-value breakdown-value-negative">-{rocksolid}</p>
								</div>
								:
								null
							}
						</div>
						<div className="basic-stat-breakdown">
							<div className="breakdown-container">
								<p className="breakdown-description">Base</p>
								<p className="breakdown-value">{basicDamage.toFixed(0)}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Crit Chance</p>
								<p className="breakdown-value">{critChance}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Crit Damage</p>
								<p className="breakdown-value">{critDamage}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Armor</p>
								<p className="breakdown-value">x{enemyArmorMultiplier.toFixed(2)}</p>
							</div>
							<div className="breakdown-container">
								<p className="breakdown-description">Magic Resist</p>
								<p className="breakdown-value">x{enemyResistMultiplier.toFixed(2)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${items.length > 0 ? null : "hidden"} basic-calc-item-effect-list`}>
				{
				items.length > 0
				?
				`Currently applying item effect from ${items.join(", ")}.`
				:
				null
				}
			</div>
		</React.Fragment>
	)
}

export default CalcBasic;
