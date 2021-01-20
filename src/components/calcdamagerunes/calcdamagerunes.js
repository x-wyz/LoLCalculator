import React from 'react';

import PresKey1 from '../../assets/runes/precisionkey1.png';

import DomKey1 from '../../assets/runes/domkey1.png';
import DomKey2 from '../../assets/runes/domkey2.png';
import DomNode1 from '../../assets/runes/dom1.png';

import SorcKey1 from '../../assets/runes/sorckey1.png';
import SorcKey2 from '../../assets/runes/sorckey2.png';
import SorcNode7 from '../../assets/runes/sorc7.png';

import ResKey2 from '../../assets/runes/reskey2.png';

import './calcdamagerunes.css';

const CalcRunes = ({ ally, enemy }) => {
	const { runes: allyrunes } = ally;
	const ap = ally.ap;
	const bonusAd = ally.attack - ally.baseAttack - ((ally.lv - 1) * ally.lvAttack);
	const totalAd = ally.attack;

	const adaptiveDef = ap > bonusAd ? enemy.resist : enemy.armor;
	const adaptiveDamageType = ap > bonusAd ? "Magical" : "Physical";

	console.log(bonusAd)

	return (
		<div className="runes-damage-calc">
			{
				allyrunes.precision.key1 === true
				?
				(
					<div className="rune-calc">
						<img src={PresKey1} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Press the Attack</p>
							<p className="rune-calc-damage">
								{
									((40 + 8.235 * (ally.lv - 1)) * (100/(100 + adaptiveDef))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((40 + 8.235 * (ally.lv - 1)) * (100/(100 + adaptiveDef))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.domination.key1 === true
				?
				(
					<div className="rune-calc">
						<img src={DomKey1} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Electrocute</p>
							<p className="rune-calc-damage">
								{
									(((30 + 8.823 * (ally.lv - 1)) + (.4 * bonusAd) + (.25 * ap)) * (100/(100 + adaptiveDef))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((30 + 8.823 * (ally.lv - 1)) + (.4 * bonusAd) + (.25 * ap) * (100/(100 + adaptiveDef))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.domination.key2 === true
				?
				(
					<div className="rune-calc">
						<img src={DomKey2} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Predator</p>
							<p className="rune-calc-damage">
								{
									(((40 + 4.705 * (ally.lv - 1)) + (.2 * bonusAd) + (.1 * ap)) * (100/(100 + adaptiveDef))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((40 + 4.705 * (ally.lv - 1)) + (.2 * bonusAd) + (.1 * ap) * (100/(100 + adaptiveDef))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.domination.node1 === true
				?
				(
					<div className="rune-calc">
						<img src={DomNode1} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Cheap Shot</p>
							<p className="rune-calc-damage">
								{
									((10 + 2.058 * (ally.lv - 1))).toFixed(1)
								}
								&nbsp; True Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((10 + 2.058 * (ally.lv - 1))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.sorcery.key1 === true
				?
				(
					<div className="rune-calc">
						<img src={SorcKey1} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Summon Aery</p>
							<p className="rune-calc-damage">
								{
									(((10 + 1.764 * (ally.lv - 1)) + (.15 * bonusAd) + (.10 * ap)) * (100/(100 + adaptiveDef))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((10 + 1.764 * (ally.lv - 1)) + (.15 * bonusAd) + (.10 * ap) * (100/(100 + adaptiveDef))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.sorcery.key2 === true
				?
				(
					<div className="rune-calc">
						<img src={SorcKey2} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Arcane Comet</p>
							<p className="rune-calc-damage">
								{
									(((30 + 4.117 * (ally.lv - 1)) + (.35 * bonusAd) + (.20 * ap)) * (100/(100 + adaptiveDef))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((30 + 4.117 * (ally.lv - 1)) + (.35 * bonusAd) + (.20 * ap) * (100/(100 + adaptiveDef))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
			{
				allyrunes.resolve.key2 === true
				?
				(
					<div className="rune-calc">
						<img src={ResKey2} className="rune-calc-image" />
						<div className="rune-calc-information">
							<p className="rune-calc-name">Aftershock</p>
							<p className="rune-calc-damage">
								{
									(((25 + 5.588 * (ally.lv - 1))) * (100/(100 + enemy.resist))).toFixed(1)
								}
								&nbsp; {adaptiveDamageType} Damage
							</p>
							<p className="rune-calc-percentage">
								[
								{
									(((25 + 5.588 * (ally.lv - 1)) * (100/(100 + enemy.resist))) / enemy.hp * 100).toFixed(1)
								}
								%]
							</p>
						</div>
					</div>
				)
				: 
				null
			}
		</div>
	)
}

export default CalcRunes;
