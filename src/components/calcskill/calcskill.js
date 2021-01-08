import React from 'react';

const CalcSkill = ({ icon, ratio, enemyHp, enemyAr, enemyRes, scale, damageType, ad, ap, base }) => {
	const totalDamage = scale === 'ap' ? base + (ap*ratio) : base + (ad*ratio);
	const damageMultiplier = damageType === 'magical' ? 100/(100+enemyRes) : 100/(100+enemyAr);

	const damage = totalDamage * damageMultiplier;
	const damagePercentage = (enemyHp - damage) / enemyHp;

	return (
		<section className="skill-calculations-container">
			<div className="skill-icon" style={{backgroundImage: `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${icon}.png`}}></div>
			<div className="skill-calculations">
				<div className="skill-information-container">
					<p className="calculation-description">Total Damage</p>
					<p className="calculation-results">{totalDamage}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Multiplier</p>
					<p className="calculation-results">{damageMultiplier}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Damage</p>
					<p className="calculation-results">{damage}</p>
				</div>
				<div className="skill-information-container">
					<p className="calculation-description">Percentage</p>
					<p className="calculation-results">{damagePercentage}</p>
				</div>
			</div>
		</section>
	)
}

export default CalcSkill;
