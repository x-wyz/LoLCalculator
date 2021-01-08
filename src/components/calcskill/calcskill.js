import React from 'react';
import './calcskill.css'

const CalcSkill = ({ icon, ratio, enemyHp, enemyAr, enemyRes, scale, damageType, ad, ap, base }) => {
	const totalDamage = scale === 'ap' ? base + (ap*ratio) : base + (ad*ratio);
	console.log(scale === 'ap')
	const damageMultiplier = damageType === 'magical' ? 100/(100+enemyRes) : 100/(100+enemyAr);

	const damage = totalDamage * damageMultiplier;
	const damagePercentage = (1 - (enemyHp - damage) / enemyHp) * 100;

	return (
		<section className="skill-calculations-container">
			<div className="calc-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${icon}.png)`}}></div>
			<div className="skill-calculations">
				<div className="skill-information-container">
					<p className="calculation-description">Total Damage</p>
					<p className="calculation-results">{totalDamage}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Multiplier</p>
					<p className="calculation-results">{damageMultiplier.toFixed(2)}</p>
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
