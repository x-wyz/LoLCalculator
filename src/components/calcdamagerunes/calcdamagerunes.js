import React from 'react';

import PresKey1 from '../../assets/runes/precisionkey1.png';

import DomKey1 from '../../assets/runes/domkey1.png';
import DomKey2 from '../../assets/runes/domkey2.png';
import DomKey3 from '../../assets/runes/domkey3.png';
import DomNode1 from '../../assets/runes/dom1.png';
import DomNode4 from '../../assets/runes/dom4.png';
import DomNode5 from '../../assets/runes/dom5.png';
import DomNode6 from '../../assets/runes/dom6.png';

import SorcKey1 from '../../assets/runes/sorckey1.png';
import SorcKey2 from '../../assets/runes/sorckey2.png';
import SorcNode4 from '../../assets/runes/sorc4.png';
import SorcNode6 from '../../assets/runes/sorc6.png';
import SorcNode7 from '../../assets/runes/sorc7.png';
import SorcNode9 from '../../assets/runes/sorc9.png';

import ResKey2 from '../../assets/runes/reskey2.png';
import ResNode4 from '../../assets/runes/res4.png';
import ResNode7 from '../../assets/runes/res7.png';

import './calcdamagerunes.css';

const runes = [
	{
		name: "Press the Attack",
		type: "damage",
		img: PresKey1,
		min: 40,
		max: 180,
		tree: "precision",
		node: "key1",
		damage: "adaptive"
	},
	{
		name: "Electrocute",
		type: "damage",
		img: DomKey1,
		min: 30,
		max: 180,
		bAd: 40,
		ap: 25,
		tree: "domination",
		node: "key1",
		damage: "adaptive"
	},
	{
		name: "Predator",
		type: "damage",
		img: DomKey2,
		min: 40,
		max: 180,
		bAd: 20,
		ap: 10,
		tree: "domination",
		node: "key2",
		damage: "adaptive"
	},
	{
		name: "Dark Harvest",
		type: "damage",
		img: DomKey3,
		min: 20,
		max: 60,
		bAd: 25,
		ap: 15,
		tree: "domination",
		node: "key3",
		damage: "adaptive"
	},
	{
		name: "Cheap Shot",
		type: "damage",
		img: DomNode1,
		min: 10,
		max: 45,
		tree: "domination",
		node: "node1",
		damage: "true"
	},
	{
		name: "Zombie Ward",
		type: "stack",
		img: DomNode4,
		min: 0,
		max: 10,
		tree: "domination",
		node: "node4",
	},
	{
		name: "Ghost Poro",
		type: "stack",
		img: DomNode5,
		min: 0,
		max: 10,
		tree: "domination",
		node: "node5",
	},
	{
		name: "Eyeball Collection",
		type: "stack",
		img: DomNode6,
		min: 0,
		max: 10,
		tree: "domination",
		node: "node6",
	},
	{
		name: "Summon Aery",
		type: "damage",
		img: SorcKey1,
		min: 10,
		max: 40,
		bAd: 15,
		ap: 10,
		tree: "sorcery",
		node: "key1",
		damage: "adaptive"
	},
	{
		name: "Arcane Comet",
		type: "damage",
		img: SorcKey2,
		min: 30,
		max: 100,
		bAd: 35,
		ap: 20,
		tree: "sorcery",
		node: "key2",
		damage: "adaptive"
	},
	{
		name: "Transcendence",
		type: "utility",
		img: SorcNode4,
		tree: "sorcery",
		node: "node4",
	},
	{
		name: "Absolute Focus",
		type: "utility",
		img: SorcNode6,
		tree: "sorcery",
		node: "node6",
	},
	{
		name: "Scorch",
		type: "damage",
		img: SorcNode7,
		min: 15,
		max: 35,
		tree: "sorcery",
		node: "node7",
		damage: "magical"
	},
	{
		name: "Gathering Storm",
		type: "stack",
		img: SorcNode9,
		min: 0,
		max: 6,
		tree: "sorcery",
		node: "node9",
	},
	{
		name: "Aftershock",
		type: "damage",
		img: ResKey2,
		min: 25,
		max: 120,
		bhp: 8,
		tree: "resolve",
		node: "key2",
		damage: "magical"
	},
	{
		name: "Conditioning",
		type: "utility",
		img: ResNode4,
		tree: "resolve",
		node: "node4",
	},
	{
		name: "Overgrowth",
		type: "stack",
		img: ResNode7,
		min: 0,
		max: 300,
		tree: "resolve",
		node: "node7",
	},
]

const CalcRunes = ({ ally, enemy, setRuneValue }) => {
	const ap = ally.ap;
	const bonusAd = ally.attack - ally.baseAttack - ((ally.lv - 1) * ally.lvAttack);

	const adaptiveDamageType = ap > bonusAd ? "magical" : "physical";

	return (
		<div className="runes-damage-calc">
			{
				runes.map(rune => {
					if (ally.runes[rune.tree][rune.node] !== false){
						let apScale = rune.ap ? ap * (rune.ap/100) : 0;
						let bAdScale = rune.bAd ? bonusAd * (rune.bAd/100) : 0;
						let baseMin = rune.min && rune.type === "damage" ? rune.min : 0;
						let baseMax = rune.max && rune.type === "damage" ? rune.max : 0;
						let damage = baseMin + (((baseMax - baseMin) / 17) * (ally.lv - 1));

						let multiplier = rune.damage === "adaptive" ? (ap > bonusAd ? "magical" : "physical") : rune.damage;

						if (multiplier !== undefined){
							multiplier = multiplier === "physical" ? (100/(100+enemy.armor)) : multiplier === "magical" ? (100/(100+enemy.resist)) : 1;
						}

						return (<div className={`rune-calc ${`rcalc-${rune.type}`}`}>
							<img src={rune.img} className="rune-calc-image" alt="" />
							{
								rune.type === "damage"
								?
								(<div className="rune-calc-information rune-calc-damage">
									<p className="rune-calc-name">{rune.name}</p>
									<p className="rune-calc-damage">
										{
											((damage + apScale + bAdScale) * multiplier).toFixed(1)
										}
										&nbsp; <span className={`${adaptiveDamageType === "Magical" ? "magic" : "phys"}`}>{adaptiveDamageType}</span> Damage
									</p>
									<p className="rune-calc-percentage">
										[
										{
											(((damage + apScale + bAdScale) * multiplier).toFixed(1) / enemy.hp * 100).toFixed(1)
										}
										%]
									</p>
								</div>)
								:
								rune.type === "stack"
								?
								(<div className="rune-calc-information rune-calc-stack">
									<p className="rune-calc-name">{rune.name}</p>
									<input onChange={(ev) => setRuneValue(ev, `${rune.tree}`, `${rune.node}`)} type="number" className="rune-calc-stacks" placeholder={`CAP: ${rune.max}`} />
								</div>)
								:
								rune.type === "utility"
								?
								(<div className="rune-calc-information rune-calc-utility">
									<p className="rune-calc-name">{rune.name}</p>
								</div>)
								:
								null
							}
						</div>)
					}
					else {
						return undefined;
					}
				})
			}
		</div>
	)
}

export default CalcRunes;
