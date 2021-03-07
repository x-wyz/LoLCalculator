import React from 'react';

import './calcsummoners.css';

const calcsummoners = ({ally, enemy}) => {
	const { hp:allyhp, lv } = ally;
	const { hp:enemyhp } = enemy;

	return (
		<div className="calc-summoners-container">
			<div className="summoner-spell-container">
				<img src='https://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/SummonerDot.png' className="summoner-image" />
				<div className="summoner-spell-information">
					<h4 className="summoner-name">Ignite</h4>
					<p className="summoner-damage">
						Damage: &nbsp;
						{
							70 + (20 * (lv - 1))
						}
					</p>
					<p className="summoner-percentage">
						[ {((70 + (20 * (lv - 1)))/enemyhp * 100).toFixed(1)}% ]
					</p>
				</div>
			</div>
			<div className="summoner-spell-container">
				<img src='https://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/SummonerHeal.png' className="summoner-image" />
				<div className="summoner-spell-information">
					<h4 className="summoner-name">Heal</h4>
					<p className="summoner-damage">
						Health: &nbsp;
						{
							90 + (15 * (lv - 1))
						}
					</p>
					<p className="summoner-percentage">
						[ {((90 + (15 * (lv - 1)))/allyhp * 100).toFixed(1)}% ]
					</p>
				</div>
			</div>
			<div className="summoner-spell-container">
				<img src='https://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/SummonerBarrier.png' className="summoner-image" />
				<div className="summoner-spell-information">
					<h4 className="summoner-name">Barrier</h4>
					<p className="summoner-damage">
						Shield: &nbsp;
						{
							115 + (20 * (lv - 1))
						}
					</p>
					<p className="summoner-percentage">
						[ {((115 + (20 * (lv - 1)))/allyhp * 100).toFixed(1)}% ]
					</p>
				</div>
			</div>
		</div>
	)
}

export default calcsummoners;
