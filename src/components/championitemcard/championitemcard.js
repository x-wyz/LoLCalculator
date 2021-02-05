import React from 'react';

import './championitemcard.css';

const ChampionItemCard = ({ item, slot }) => {

	try {
		var statKeys = Object.keys(item.stats);
		var statsArray = statKeys.map(key => {
			return [item.stats[key], key];
		})
	}
	catch {
		return <div />
	}

	return (
		<section className="champion-item">
			<div className="champion-item-icon" style={item.img === undefined ? {} : {backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/${item.img}.png)`}}>
				<span className="item-slot-number">{slot}</span>
			</div>
			<div className="item-stats-container">
				{
					statsArray.map(stat => (
						<div className="item-stat">
							<p className="item-stat-amount">{stat[0]}</p>
							<p className="item-stat-type">{stat[1]}</p>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default ChampionItemCard;
