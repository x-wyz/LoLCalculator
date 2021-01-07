import React from 'react';

import './championskillcard.css';

const ChampionSkillCard = ({ skill, currentLv, maxLv, increaseLv, decreaseLv, ultimate }) => (
	<div className="champion-skill-container">
		<div className={`champion-skill ${ultimate ? 'ult' : null}`}>
			<div className="champion-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}}></div>
			<div className="skill-adjustment">
				<p type="button" className="skill-increase" >⬆</p>
				<p type="button" className="skill-decrease">⬇</p>
			</div>
			<p className="skill-current-lv">{currentLv}/{maxLv ? maxLv : 5}</p>
		</div>
	</div>
)

export default ChampionSkillCard;
