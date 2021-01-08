import React from 'react';

import './championitemcard.css';

const ChampionItemCard = ({ name, stats, changeItem, ico, slot }) => {
	const updatedStats = stats.map(stat => {
		const cur = stat.split(" ");
		cur[1] = cur[1].toUpperCase();
		return cur;
	});

	return (
		<section className="champion-item">
			<div className="champion-item-icon" style={{backgroundImage: `url(${ico})`}}>
				<span className="item-slot-number">{slot}</span>
			</div>
			<div className="item-stats-container">
				{
					updatedStats.map(stat => (
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
