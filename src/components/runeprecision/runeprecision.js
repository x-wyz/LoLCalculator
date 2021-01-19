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

const RunePrecision = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Precision </h2>
			<div className="rune-keystones-row">
				<div className={`keystone ${currentrunes.precision.key1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'key1')}>
					<img className="keystone-image" src={Key1} />
					<p className="keystone-name">Press the Attack</p>
				</div>
				<div className={`keystone ${currentrunes.precision.key2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'key2')}>
					<img className="keystone-image" src={Key2} />
					<p className="keystone-name">Lethal Tempo</p>
				</div>
				<div className={`keystone ${currentrunes.precision.key3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'key3')}>
					<img className="keystone-image" src={Key3} />
					<p className="keystone-name">Fleet Footwork</p>
				</div>
				<div className={`keystone ${currentrunes.precision.key4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'key4')}>
					<img className="keystone-image" src={Key4} />
					<p className="keystone-name">Conquerer</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.precision.node1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node1')}>
					<img className="minor-image" src={Minor1} />
					<p className="minor-name">Overheal</p>
				</div>
				<div className={`minor ${currentrunes.precision.node2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node2')}>
					<img className="minor-image" src={Minor2} />
					<p className="minor-name">Triumph</p>
				</div>
				<div className={`minor ${currentrunes.precision.node3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node3')}>
					<img className="minor-image" src={Minor3} />
					<p className="minor-name">Presence of mind</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.precision.node4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node4')}>
					<img className="minor-image" src={Minor4} />
					<p className="minor-name">Legend: Alacrity</p>
				</div>
				<div className={`minor ${currentrunes.precision.node5 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node5')}>
					<img className="minor-image" src={Minor5} />
					<p className="minor-name">Legend: Tenacity</p>
				</div>
				<div className={`minor ${currentrunes.precision.node6 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node6')}>
					<img className="minor-image" src={Minor6} />
					<p className="minor-name">Legend: Bloodline</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.precision.node7 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node7')}>
					<img className="minor-image" src={Minor7} />
					<p className="minor-name">Coup De Grace</p>
				</div>
				<div className={`minor ${currentrunes.precision.node8 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node8')}>
					<img className="minor-image" src={Minor8} />
					<p className="minor-name">Cut down</p>
				</div>
				<div className={`minor ${currentrunes.precision.node9 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('precision', 'node9')}>
					<img className="minor-image" src={Minor9} />
					<p className="minor-name">Last stand</p>
				</div>
			</div>
		</section>
	)
}

export default RunePrecision;
