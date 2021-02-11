import React from 'react';
import './calcitem.css'

const CalcItem = ({ ally, enemy, item }) => {

	let base = item.effect.base === item.effect.max ? item.effect.base : item.effect.base + (((item.effect.max - item.effect.base) / 17) * ally.lv - 1) 

	// New

	let bonusAd = ally.attack - ally.baseAttack - (ally.lvAttack * (ally.lv - 1));

	let scalebAr = 0;
	let scalebHp = 0;
	let scaleAd = 0;
	let scalebAd = 0;
	let scaleEMHP = 0;
	let scaleBonusAd = 0;
	let scaleAp = 0;

	if (item.effect.bAr !== 0 && item.effect.bAr !== undefined){
		scalebAr = (ally.armor - ((ally.lv - 1) * ally.lvArmor) - 26/* temp number*/) * (item.effect.bAr / 100);
	}

	if (item.effect.bHp !== 0 && item.effect.bHp !== undefined){
		scalebHp = ally.hp - ally.baseHp - (ally.lvHp * (ally.lv - 1)) * (item.effect.bHp / 100);
	}

	// total

	if (item.effect.tAd !== 0 && item.effect.tAd !== undefined){
		scaleAd = ally.attack * (item.effect.tAd / 100);
	}

	// base

	if (item.effect.baseAd !== 0 && item.effect.baseAd !== undefined){
		scalebAd = ally.baseAttack + (ally.lvAttack * (ally.lv - 1));
	}

	// bonus

	if (item.effect.bAd !== 0 && item.effect.bAd !== undefined){
		scaleBonusAd = bonusAd * (item.effect.bAd / 100)
	}

	if (item.effect.eMHP !== 0 && item.effect.eMHP !== undefined){
		scaleEMHP = enemy.hp * (item.effect.eMHP / 100)
	}

	if (item.effect.ap !== 0 && item.effect.ap !== undefined){
		scalebAr = ally.ap * (item.effect.ap / 100);
	}

	const totalDamage = base + scalebAr + scalebHp + scaleAd + scalebAd + scaleEMHP + scaleBonusAd + scaleAp;

	const multiplier = item.effect.damage === "physical" ? (100 / (100 + enemy.armor)) : item.effect.damage === "magical" ? (100 / (100 + enemy.resist)) : 0;

	const damage = totalDamage * multiplier;

	const damagePercentage = damage / enemy.hp * 100;

	return (
		<section className="skill-calculations-container">
			<div className="calc-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/${item.img}.png)`}}></div>
			<div className="skill-calculations">
				<div className="skill-information-container">
					<p className="calculation-description">Total Damage</p>
					<p className="calculation-results">{totalDamage.toFixed(0)}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Multiplier</p>
					<p className="calculation-results">{multiplier.toFixed(2)}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Damage</p>
					<p className="calculation-results">{damage.toFixed(1)}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Percentage</p>
					<p className="calculation-results">{damagePercentage.toFixed(1)}%</p>
				</div>
			</div>
		</section>
	)
}

export default CalcItem;
