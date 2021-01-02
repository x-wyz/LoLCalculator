import React from 'react';

import './championstatcard.css';

const ChampionStatCard = ({ name, amount, lvup }) => {
	return (
		<div className="stat-container">
			<p className="stat-name">{name}</p>
			<p className="stat-amount">{amount} {lvup !== undefined ? `(+${lvup})` : null}</p>
		</div>
	)
}

export default ChampionStatCard;
