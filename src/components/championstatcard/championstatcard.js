import React from 'react';

import './championstatcard.css';

const ChampionStatCard = ({ name, amount, lvup }) => {
	return (
		<section className="stat-container">
			<p className="stat-name">{name}</p>
			<p className="stat-amount">{amount} {lvup !== undefined ? `(+${lvup})` : null}</p>
		</section>
	)
}

export default ChampionStatCard;
