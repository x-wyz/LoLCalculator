import React from 'react';

import './championcard.css';
import ChampionStatCard from '../championstatcard/championstatcard';
import ChampionSkillCard from '../championskillcard/championskillcard';

/*

mainAlly: {
        name: 'Kennen',
        lv: 1,
        hp: 541,
        lvHp: 84,
        armor: 29,
        lvArmor: 3.75,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 200,
        lvMana: 0,
        attack: 48,
        lvAttack: 3.75,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        ability1: {
          base: [75,115,155,195,235],
          scale: 'ap',
          type: 'damage',
          ratio: 0.75
        },
        ability2: {
          base: [60,85,110,135,160],
          scale: 'ap',
          type: 'damage',
          ratio: 0.75
        },
        ability3: {
          base: [80,120,160,200,240],
          scale: 'ap',
          type: 'damage',
          ratio: 0.8
        },
        ability4: {
          base: [300,562.5,825],
          scale: 'ap',
          type: 'damage',
          ratio: 1.5
        },

*/

const ChampionCard = ({ champion, className }) => {
	console.log(champion.abilities)
	return (
		<section className="champion-card">
			<div className={`champion ${className}`} style={{backgroundImage: `url(${champion.image})`}}>
				<div className="dark-glass"></div>
			</div>
			<div className="champion-data-container">
				<section className="champion-stats">
					<h6 className="champion-section-heading">Stats</h6>
					<div className="champion-section-content">
						<div className="champion-stat-section">
							<ChampionStatCard name="health" amount={champion.hp} lvup={champion.lvHp} />
							<ChampionStatCard name="mana" amount={champion.mana} lvup={champion.lvMana} />
						</div>
						<div className="champion-stat-section">
							<ChampionStatCard name="attack damage" amount={champion.attack} lvup={champion.lvAttack} />
							<ChampionStatCard name="ability power" amount={champion.ap} />
						</div>
						<div className="champion-stat-section">
							<ChampionStatCard name="armor" amount={champion.armor} lvup={champion.lvArmor} />
							<ChampionStatCard name="magic resist" amount={champion.resist} lvup={champion.lvResist} />
						</div>
					</div>
				</section>
				<section className="champion-skills">
					<h6 className="champion-section-heading">Skills</h6>
					<div className="champion-section-content">
						{
							champion.abilities.map(ability => <ChampionSkillCard currentLv={1} skill={ability} />)
						}
					</div>
				</section>
				<section className="champion-items">
					<h6 className="champion-section-heading">Items</h6>
					<div className="champion-section-content">
					</div>
				</section>
			</div>
		</section>
	)
}

export default ChampionCard;
