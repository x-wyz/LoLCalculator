import React from 'react';
import Baron from '../../assets/etc/baron.png';
import Infernal from '../../assets/etc/infernal.png';
import Mountain from '../../assets/etc/mountain.png';

import './championbuffs.css';

const ChampionBuffs = ({editBuff, currentBuffs}) => {
	return (
		<div className="temp-buff-container">
			<h3 className="buff-header">Elixirs</h3>
			<div className="elixir-buffs">
				<div className="elixir">
					<img src="https://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/2140.png" className="elixir-image" />
					<p className="buff-text">Wrath</p>
				</div>
				<div className="elixir">
					<img src="https://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/2139.png" className="elixir-image" />
					<p className="buff-text">Sorcery</p>
				</div>
				<div className="elixir">
					<img src="https://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/2138.png" className="elixir-image" />
					<p className="buff-text">Iron</p>
				</div>
			</div>

			<h3 className="buff-header">Baron</h3>
			<div className="baron-buff">
				<div className="baron">
					<img src={Baron} className="baron-image" />
					<div className="buff-text">
						<p className="baron-header">Hand of Baron</p>
						<p className="note">** Based on baron buff at 26 minutes</p>
					</div>
				</div>
			</div>

			<h3 className="buff-header">Dragons</h3>
			<div className="infernal-buffs">
				<div className="infernal">
					<img src={Infernal} className="infernal-image" />
					<p className="buff-text">Infernal 1</p>
				</div>
				<div className="infernal">
					<img src={Infernal} className="infernal-image" />
					<p className="buff-text">Infernal 2</p>
				</div>
			</div>

			<div className="mountain-buffs">
				<div className="mountain">
					<img src={Mountain} className="mountain-image" />
					<p className="buff-text">Mountain 1</p>
				</div>
				<div className="mountain">
					<img src={Mountain} className="mountain-image" />
					<p className="buff-text">Mountain 2</p>
				</div>
			</div>
		</div>
	)
}

export default ChampionBuffs;
