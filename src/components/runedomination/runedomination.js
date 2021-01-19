import React from 'react';

import Key1 from '../../assets/runes/domkey1.png';
import Key2 from '../../assets/runes/domkey2.png';
import Key3 from '../../assets/runes/domkey3.png';
import Key4 from '../../assets/runes/domkey4.png';

import Minor1 from '../../assets/runes/dom1.png';
import Minor2 from '../../assets/runes/dom2.png';
import Minor3 from '../../assets/runes/dom3.png';
import Minor4 from '../../assets/runes/dom4.png';
import Minor5 from '../../assets/runes/dom5.png';
import Minor6 from '../../assets/runes/dom6.png';
import Minor7 from '../../assets/runes/dom7.png';
import Minor8 from '../../assets/runes/dom8.png';
import Minor9 from '../../assets/runes/dom9.png';
import Minor10 from '../../assets/runes/dom10.png';

const RunePrecision = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Domination </h2>
			<div className="rune-keystones-row">
				<div className={`keystone ${currentrunes.domination.key1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'key1')}>
					<img className="keystone-image" src={Key1} />
					<p className="keystone-name">Electrocute</p>
				</div>
				<div className={`keystone ${currentrunes.domination.key2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'key2')}>
					<img className="keystone-image" src={Key2} />
					<p className="keystone-name">Predator</p>
				</div>
				<div className={`keystone ${currentrunes.domination.key3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'key3')}>
					<img className="keystone-image" src={Key3} />
					<p className="keystone-name">Dark Harvest</p>
				</div>
				<div className={`keystone ${currentrunes.domination.key4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'key4')}>
					<img className="keystone-image" src={Key4} />
					<p className="keystone-name">Hail of Blade</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.domination.node1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node1')}>
					<img className="minor-image" src={Minor1} />
					<p className="minor-name">Cheap Shot</p>
				</div>
				<div className={`minor ${currentrunes.domination.node2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node2')}>
					<img className="minor-image" src={Minor2} />
					<p className="minor-name">Taste of Blood</p>
				</div>
				<div className={`minor ${currentrunes.domination.node3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node3')}>
					<img className="minor-image" src={Minor3} />
					<p className="minor-name">Sudden Impact</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.domination.node4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node4')}>
					<img className="minor-image" src={Minor4} />
					<p className="minor-name">Zombie Ward</p>
				</div>
				<div className={`minor ${currentrunes.domination.node5 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node5')}>
					<img className="minor-image" src={Minor5} />
					<p className="minor-name">Ghost Poro</p>
				</div>
				<div className={`minor ${currentrunes.domination.node6 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node6')}>
					<img className="minor-image" src={Minor6} />
					<p className="minor-name">Eyeball Collection</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.domination.node7 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node7')}>
					<img className="minor-image" src={Minor7} />
					<p className="minor-name">Ravenous Hunter</p>
				</div>
				<div className={`minor ${currentrunes.domination.node8 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node8')}>
					<img className="minor-image" src={Minor8} />
					<p className="minor-name">Ingenious Hunter</p>
				</div>
				<div className={`minor ${currentrunes.domination.node9 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node9')}>
					<img className="minor-image" src={Minor9} />
					<p className="minor-name">Relentless Hunter</p>
				</div>
				<div className={`minor ${currentrunes.domination.node10 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('domination', 'node10')}>
					<img className="minor-image" src={Minor10} />
					<p className="minor-name">Ultimate Hunter</p>
				</div>
			</div>
		</section>
	)
}

export default RunePrecision;
