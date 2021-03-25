import React from 'react';

import Minor1 from '../../assets/runes/minor1.png';
import Minor2 from '../../assets/runes/minor2.png';
import Minor3 from '../../assets/runes/minor3.png';
import Minor4 from '../../assets/runes/minor4.png';
import Minor5 from '../../assets/runes/minor5.png';
import Minor6 from '../../assets/runes/minor6.png';

const RuneMinor = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Minor </h2>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.minor.node1 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node1')}>
					<img className="minor-image" src={Minor1} alt="minior rune adaptive"/>
					<p className="minor-name">Adaptive</p>
				</div>
				<div className={`minor ${currentrunes.minor.node2 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node2')}>
					<img className="minor-image" src={Minor2} alt="minior rune attack speed"/>
					<p className="minor-name">Attack Speed</p>
				</div>
				<div className={`minor ${currentrunes.minor.node3 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node3')}>
					<img className="minor-image" src={Minor3} alt="minior rune ability haste"/>
					<p className="minor-name">Ability Haste</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.minor.node4 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node4')}>
					<img className="minor-image" src={Minor1} alt="minior rune adaptive"/>
					<p className="minor-name">Adaptive</p>
				</div>
				<div className={`minor ${currentrunes.minor.node5 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node5')}>
					<img className="minor-image" src={Minor4} alt="minior rune armor"/>
					<p className="minor-name">Armor</p>
				</div>
				<div className={`minor ${currentrunes.minor.node6 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node6')}>
					<img className="minor-image" src={Minor5} alt="minior rune magic resist"/>
					<p className="minor-name">Magic Resist</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.minor.node7 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node7')}>
					<img className="minor-image" src={Minor6} alt="minior rune scaling health"/>
					<p className="minor-name">Health/Lv</p>
				</div>
				<div className={`minor ${currentrunes.minor.node8 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node8')}>
					<img className="minor-image" src={Minor4} alt="minior rune armor"/>
					<p className="minor-name">Armor</p>
				</div>
				<div className={`minor ${currentrunes.minor.node9 !== false ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('minor', 'node9')}>
					<img className="minor-image" src={Minor5} alt="minior rune magic resist"/>
					<p className="minor-name">Magic Resist</p>
				</div>
			</div>
		</section>
	)
}

export default RuneMinor;
