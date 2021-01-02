import React from 'react';

import './championcard.css';

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
	return (
		<div className="champion-card">
			<div className={`champion ${className}`} style={{backgroundImage: `url(${champion.image})`}}>
				<div className="dark-glass"></div>
			</div>
			<div className="champion-data-container">
				<div className="champion-stats">
				</div>
				<div className="champion-skills">
				</div>
				<div className="champion-items">
				</div>
			</div>
		</div>
	)
}

export default ChampionCard;
