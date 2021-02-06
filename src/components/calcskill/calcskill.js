import React from 'react';
import './calcskill.css'

const CalcSkill = ({ ally, enemy, skill, skillLv }) => {

	// New

	let bonusAd = ally.attack - ally.baseAttack - (ally.lvAttack * (ally.lv - 1))

	let scaleAp = 0;
	let scaleBAD = 0;
	let scaleAd = 0;
	let scaleMHP =  0;
	let scaleEMHP = 0;

	if (skill.ap !== 0 && skill.ap !== undefined){
		if (Array.isArray(skill.ap)) {
			scaleAp = ally.ap * (skill.ap[skillLv] / 100);
		} else {
			scaleAp = ally.ap * (skill.ap / 100);
		}
	}

	if (skill.ad !== 0 && skill.ad !== undefined){
		if (Array.isArray(skill.ad)) {
			scaleAd = ally.attack * (skill.ad[skillLv] / 100);
		} else {
			scaleAd = ally.attack * (skill.ad / 100)
		}
	}

	if (skill.bAd !== 0 && skill.bAd !== undefined){
		if (Array.isArray(skill.bAd)) {
			scaleBAD = bonusAd * (skill.bAd[skillLv] / 100);
		} else {
			scaleBAD = bonusAd * (skill.bAd / 100)
		}
	}

	if (skill.mhp !== 0 && skill.mhp !== undefined){
		if (Array.isArray(skill.mhp)) {
			scaleMHP = ally.hp * (skill.mhp[skillLv] / 100);
		} else {
			scaleMHP = ally.hp * (skill.mhp / 100)
		}
	}

	if (skill.emhp !== 0 && skill.emhp !== undefined){
		if (Array.isArray(skill.emhp)) {
			scaleEMHP = enemy.hp * (skill.emhp[skillLv] / 100);
		} else {
			scaleEMHP = enemy.hp * (skill.emhp / 100)
		}
	}

	const skillDamage = skill.type === "damage" ? skill.base[skillLv] : 0;
	const totalDamage = skillDamage + scaleAp + scaleAd + scaleBAD + scaleEMHP + scaleMHP;

	const multiplier = skill.damage === "physical" ? (100 / (100 + enemy.armor)) : skill.damage === "magical" ? (100 / (100 + enemy.resist)) : 0;

	const damage = totalDamage * multiplier;

	const damagePercentage = damage / enemy.hp * 100;

	console.log(ally.bonusAd)

	return (
		<section className="skill-calculations-container">
			<div className="calc-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}}></div>
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

export default CalcSkill;
