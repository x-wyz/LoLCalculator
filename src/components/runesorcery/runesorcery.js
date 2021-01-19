import React from 'react';

import Key1 from '../../assets/runes/sorckey1.png';
import Key2 from '../../assets/runes/sorckey2.png';
import Key3 from '../../assets/runes/sorckey3.png';

import Minor1 from '../../assets/runes/sorc1.png';
import Minor2 from '../../assets/runes/sorc2.png';
import Minor3 from '../../assets/runes/sorc3.png';
import Minor4 from '../../assets/runes/sorc4.png';
import Minor5 from '../../assets/runes/sorc5.png';
import Minor6 from '../../assets/runes/sorc6.png';
import Minor7 from '../../assets/runes/sorc7.png';
import Minor8 from '../../assets/runes/sorc8.png';
import Minor9 from '../../assets/runes/sorc9.png';

const RuneSorcery = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Sorcery </h2>
			<div className="rune-keystones-row">
				<div className={`keystone ${currentrunes.sorcery.key1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'key1')}>
					<img className="keystone-image" src={Key1} />
					<p className="keystone-name">Summon Aery</p>
				</div>
				<div className={`keystone ${currentrunes.sorcery.key2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'key2')}>
					<img className="keystone-image" src={Key2} />
					<p className="keystone-name">Arcane Comet</p>
				</div>
				<div className={`keystone ${currentrunes.sorcery.key3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'key3')}>
					<img className="keystone-image" src={Key3} />
					<p className="keystone-name">Phase Rush</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.sorcery.node1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node1')}>
					<img className="minor-image" src={Minor1} />
					<p className="minor-name">Nullifying Orb</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node2')}>
					<img className="minor-image" src={Minor2} />
					<p className="minor-name">Manaflow Band</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node3')}>
					<img className="minor-image" src={Minor3} />
					<p className="minor-name">Nimbus Cloak</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.sorcery.node4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node4')}>
					<img className="minor-image" src={Minor4} />
					<p className="minor-name">Transcendence</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node5 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node5')}>
					<img className="minor-image" src={Minor5} />
					<p className="minor-name">Celerity</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node6 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node6')}>
					<img className="minor-image" src={Minor6} />
					<p className="minor-name">Absolute Focus</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.sorcery.node7 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node7')}>
					<img className="minor-image" src={Minor7} />
					<p className="minor-name">Scorch</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node8 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node8')}>
					<img className="minor-image" src={Minor8} />
					<p className="minor-name">Waterwalking</p>
				</div>
				<div className={`minor ${currentrunes.sorcery.node9 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('sorcery', 'node9')}>
					<img className="minor-image" src={Minor9} />
					<p className="minor-name">Gathering Storm</p>
				</div>
			</div>
		</section>
	)
}

export default RuneSorcery;
