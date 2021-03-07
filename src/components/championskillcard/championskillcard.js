import React from 'react';

import './championskillcard.css';

let levels = [0,1,2,3,4,5];
let keys = ["Q", "W", "E", "R"]

const ChampionSkillCard = ({ update, currentLv, skillPosition, skill, ultimate}) => (
	<div className="champion-skill-container">
		<section className={`champion-skill`}>
			<p className="champion-skill-key">{keys[skillPosition - 1]}</p>
			<div className="champion-skill-icon" style={{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}}></div>
			<select onChange={(e) => update(skillPosition, e)} className="champion-skill-select">
				{
					levels.map(level => {
						if (ultimate === true && level > 3){
							return null;
						}
						else if (level === currentLv) {
							return <option selected="selected" className="skill-lv-option" value={level}>{level}</option>
						}
						else {
							return <option className="skill-lv-option" value={level}>{level}</option>
						}
					})
				}
			</select>
		</section>
	</div>
)

export default ChampionSkillCard;

// <p type="button" className="skill-increase" onClick={() => update(skillPosition, "add")} >⬆</p>
