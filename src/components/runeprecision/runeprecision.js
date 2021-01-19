import React from 'react';

import Key1 from '../../assets/runes/precisionkey1.png';
import Key2 from '../../assets/runes/precisionkey2.png';
import Key3 from '../../assets/runes/precisionkey3.png';
import Key4 from '../../assets/runes/precisionkey4.png';

import Minor1 from '../../assets/runes/precision1.png';
import Minor2 from '../../assets/runes/precision2.png';
import Minor3 from '../../assets/runes/precision3.png';
import Minor4 from '../../assets/runes/precision4.png';
import Minor5 from '../../assets/runes/precision5.png';
import Minor6 from '../../assets/runes/precision6.png';
import Minor7 from '../../assets/runes/precision7.png';
import Minor8 from '../../assets/runes/precision8.png';
import Minor9 from '../../assets/runes/precision9.png';

import './runeprecision.css';

const RunePrecision = ({ currentrunes, onChange }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Precision </h2>
			<div className="rune-keystones-row">
				<div className="keystone">
					<img className="keystone-image" src={Key1} />
					<p className="keystone-name">Press the Attack</p>
				</div>
				<div className="keystone">
					<img className="keystone-image" src={Key2} />
					<p className="keystone-name">Lethal Tempo</p>
				</div>
				<div className="keystone">
					<img className="keystone-image" src={Key3} />
					<p className="keystone-name">Fleet Footwork</p>
				</div>
				<div className="keystone">
					<img className="keystone-image" src={Key4} />
					<p className="keystone-name">Conquerer</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className="minor">
					<img className="minor-image" src={Minor1} />
					<p className="minor-name">Overheal</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor2} />
					<p className="minor-name">Triumph</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor3} />
					<p className="minor-name">Presence of mind</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className="minor">
					<img className="minor-image" src={Minor4} />
					<p className="minor-name">Legend: Alacrity</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor5} />
					<p className="minor-name">Legend: Tenacity</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor6} />
					<p className="minor-name">Legend: Bloodline</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className="minor">
					<img className="minor-image" src={Minor7} />
					<p className="minor-name">Coup De Grace</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor8} />
					<p className="minor-name">Cut down</p>
				</div>
				<div className="minor">
					<img className="minor-image" src={Minor9} />
					<p className="minor-name">Last stand</p>
				</div>
			</div>
		</section>
	)
}

export default RunePrecision;
