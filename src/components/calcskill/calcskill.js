import React from 'react';
import './calcskill.css'

const CalcSkill = ({ ally, enemy, skill, skillLv }) => {

	let scaleLv = skill.lvScale !== undefined ? skill.lvScale[0] + ((skill.lvScale[1] - skill.lvScale[0]) / 17) * (ally.lv - 1) : 0

	try {
		if (skill.lvScale[2] === "emhp"){
			scaleLv = enemy.hp * (scaleLv / 100);
		}
	}
	catch{}

	// New

	let bonusAd = ally.attack - ally.baseAttack - (ally.lvAttack * (ally.lv - 1))

	let scaleAp = 0;
	let scaleBAD = 0;
	let scaleAd = 0;
	let scaleMHP =  0;
	let scaleEMHP = 0;

	let scaleEMHPs = 0;

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

	if (skill.emhpScale !== 0 && skill.emhpScale !== undefined){
		if (skill.emhpScale[2] === "ap") {
			const times = ally.ap / skill.emhpScale[1];
			const multiplier = skill.emhpScale[0] * times;
			scaleEMHPs = enemy.hp * (multiplier / 100);
		}
		else if (skill.emhpScale[2] === "bAd") {
			const times = bonusAd / skill.emhpScale[1];
			const multiplier = skill.emhpScale[0] * times;
			scaleEMHPs = enemy.hp * (multiplier / 100);
		}
	}

	const skillDamage = skill.type === "damage" ? skill.base[skillLv] : 0;
	const totalDamage = scaleLv + skillDamage + scaleAp + scaleAd + scaleBAD + scaleEMHP + scaleEMHPs + scaleMHP;

	const eArmor = enemy.armor * (1 - (ally.arpen / 100)) - (ally.lethality * (0.6 + 0.4 * ally.lv / 18));
	const eResist = enemy.resist * (1 - (ally.mpen / 100)) - ally.flatMPen;
	const multiplier = skill.damage === "physical" ? (100 / (100 + eArmor)) : skill.damage === "magical" ? (100 / (100 + eResist)) : skill.damage === "true" ? 1 : 0;

	const damage = totalDamage * multiplier;

	const damagePercentage = damage / enemy.hp * 100;

	console.log(skill.ap)

	let cooldown = 0;

	if (skill.cd !== undefined) {
		if (skill.cd[0].length === 5 || skill.cd[0].length === 3){
			cooldown = skill.cd[0][skillLv];
		}
		else if (skill.cd[0].length === 1) {
			cooldown = skill.cd[0][0];
		}
		else if (skill.cd[0].length === 2) {
			cooldown = skill.cd[0][0];
		}

		if (skill.cd[2] === undefined || skill.cd[2] !== "static"){
			cooldown = cooldown * (100/(100+ally.abilityHaste))
		}
	}

	return (
		<section className="skill-calculations-container">
			<div className="skill-cooldown">
				<h6 className="skill-cooldown-header">Cooldown</h6>
				<p className="skill-cooldown-text">
					{
						cooldown.toFixed(1)
					}
				</p>
			</div>
			<div className="calc-skill-icon" style={
				skill.skill > 0 ?
				{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}
				:
				{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/11.4.1/img/passive/${skill.rname}.png)`}
			}></div>
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

			{
				skill.note !== undefined 
				?
				(<div className="skill-notes">
					<p className="skill-notes-heading">
						NOTES
					</p>
					{
						skill.note
					}
				</div>)
				:
				null
			}
		</section>
	)
}

export default CalcSkill;
