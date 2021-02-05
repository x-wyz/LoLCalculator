import React from 'react';

import './championskillcard.css';

const ChampionSkillCard = ({ update, currentLv, skillPosition, skill, ultimate}) => (
	<div className="champion-skill-container">
		<section className={`champion-skill`}>
			<p type="button" className="skill-increase" onClick={() => update(skillPosition, "add")} >⬆</p>
			<div className="champion-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}}></div>
			<p type="button" className="skill-decrease" onClick={() => update(skillPosition, "reduce")}>⬇</p>
			<p className="skill-current-lv">{currentLv+1}/{ultimate === true ? 3 : 5}</p>
		</section>
	</div>
)

export default ChampionSkillCard;
