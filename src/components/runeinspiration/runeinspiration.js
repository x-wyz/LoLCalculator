import React from 'react';

import Key1 from '../../assets/runes/inskey1.png';
import Key2 from '../../assets/runes/inskey2.png';
import Key3 from '../../assets/runes/inskey3.png';

import Minor1 from '../../assets/runes/ins1.png';
import Minor2 from '../../assets/runes/ins2.png';
import Minor3 from '../../assets/runes/ins3.png';
import Minor4 from '../../assets/runes/ins4.png';
import Minor5 from '../../assets/runes/ins5.png';
import Minor6 from '../../assets/runes/ins6.png';
import Minor7 from '../../assets/runes/ins7.png';
import Minor8 from '../../assets/runes/ins8.png';
import Minor9 from '../../assets/runes/ins9.png';

const RuneInspiration = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Inspiration </h2>
			<div className="rune-keystones-row">
				<div className={`keystone ${currentrunes.inspiration.key1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'key1')}>
					<img className="keystone-image" src={Key1} alt="Inspiration keystone glacial augment"/>
					<p className="keystone-name">Glacial Augment</p>
				</div>
				<div className={`keystone ${currentrunes.inspiration.key2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'key2')}>
					<img className="keystone-image" src={Key2} alt="Inspiration keystone spellbook"/>
					<p className="keystone-name">Spellbook</p>
				</div>
				<div className={`keystone ${currentrunes.inspiration.key3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'key3')}>
					<img className="keystone-image" src={Key3} alt="Inspiration keystone omnistone"/>
					<p className="keystone-name">Omnistone</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.inspiration.node1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node1')}>
					<img className="minor-image" src={Minor1} alt="Inspiration node hextech flashtraption"/>
					<p className="minor-name">Flashtraption</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node2')}>
					<img className="minor-image" src={Minor2} alt="Inspiration node magical footwear"/>
					<p className="minor-name">Magical Footwear</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node3')}>
					<img className="minor-image" src={Minor3} alt="Inspiration node perfect timing"/>
					<p className="minor-name">Perfect Timing</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.inspiration.node4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node4')}>
					<img className="minor-image" src={Minor4} alt="Inspiration node future's market"/>
					<p className="minor-name">Future's Market</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node5 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node5')}>
					<img className="minor-image" src={Minor5} alt="Inspiration node minion dematerializer"/>
					<p className="minor-name">Dematerializer</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node6 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node6')}>
					<img className="minor-image" src={Minor6} alt="Inspiration node biscuit delivery"/>
					<p className="minor-name">Biscuit Delivery</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.inspiration.node7 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node7')}>
					<img className="minor-image" src={Minor7} alt="Inspiration node cosmic insight"/>
					<p className="minor-name">Cosmic Insight</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node8 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node8')}>
					<img className="minor-image" src={Minor8} alt="Inspiration node approach velocity"/>
					<p className="minor-name">Approach Velocity</p>
				</div>
				<div className={`minor ${currentrunes.inspiration.node9 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('inspiration', 'node9')}>
					<img className="minor-image" src={Minor9} alt="Inspiration node time warp tonic"/>
					<p className="minor-name">Time Warp Tonic</p>
				</div>
			</div>
		</section>
	)
}

export default RuneInspiration;
