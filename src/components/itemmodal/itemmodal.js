import React, { Component } from 'react';
import "./itemmodal.css";

import { ItemsData } from '../../data/items';

const itemsKeys = Object.keys(ItemsData);
const itemsArray = itemsKeys.map(item => [item, ItemsData[item]]);

class ItemModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			search: "",
			tierFilter: "",
			statFilter: ""
		}
		this.update = this.update.bind(this);
		this.updateFilter = this.updateFilter.bind(this);
	}

	update(event){
		this.setState({search: event.target.value})
	}

	updateFilter(val, filter){
		this.setState({
			[filter === "tier" ? "tierFilter":"statFilter"]: val
		})
	}

	render(){
		const { search, tierFilter, statFilter } = this.state;

		return (
			<div className="items-modal">
				<div className="modal-content">
					<div className="item-tier-filter">
						<p className={`tier-filter general-filter ${tierFilter === "" ? "active-filter" :  null}`} onClick={() => this.updateFilter("", "tier")}>
							Any
						</p>
						<p className={`tier-filter mythic-filter ${tierFilter === "mythic" ? "active-filter" :  null}`} onClick={() => this.updateFilter("mythic", "tier")}>
							Mythic
						</p>
						<p className={`tier-filter leg-filter ${tierFilter === "legendary" ? "active-filter" :  null}`} onClick={() => this.updateFilter("legendary", "tier")}>
							Legendary
						</p>
						<p className={`tier-filter adv-filter ${tierFilter === "advance" ? "active-filter" :  null}`} onClick={() => this.updateFilter("advance", "tier")}>
							Advance
						</p>
						<p className={`tier-filter basic-filter ${tierFilter === "basic" ? "active-filter" :  null}`} onClick={() => this.updateFilter("basic", "tier")}>
							Basic
						</p>
						<p className={`tier-filter boots-filter ${tierFilter === "shoes" ? "active-filter" :  null}`} onClick={() => this.updateFilter("shoes", "tier")}>
							Boots
						</p>
					</div>
					<div className="item-stat-filter">
						<p className={`stat-filter ${statFilter === "" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("", "stat")}>
							All
						</p>
						<p className={`stat-filter ${statFilter === "ad" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("ad", "stat")}>
							Attack
						</p>
						<p className={`stat-filter ${statFilter === "lethality" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("lethality", "stat")}>
							Lethality
						</p>
						<p className={`stat-filter ${statFilter === "ap" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("ap", "stat")}>
							Ability Power
						</p>
						<p className={`stat-filter ${statFilter === "hp" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("hp", "stat")}>
							Health
						</p>
						<p className={`stat-filter ${statFilter === "armor" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("armor", "stat")}>
							Armor
						</p>
						<p className={`stat-filter ${statFilter === "resist" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("resist", "stat")}>
							Magic Resist
						</p>
						<p className={`stat-filter ${statFilter === "critChance" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("critChance", "stat")}>
							Crit Chance
						</p>
						<p className={`stat-filter ${statFilter === "attackspeed" ? "active-stat-filter" : null}`} onClick={() => this.updateFilter("attackspeed", "stat")}>
							Attack Speed
						</p>
					</div>
					<div className="items-search-form">
						<h3 className="items-selector-title">Item Selector</h3>
						<input className="items-search-field" onChange={this.update} value={search} />
					</div>
					<div className="items-search-results">
						{
							itemsArray
							.filter(item => item[0].toLowerCase().includes(search.replaceAll(" ", "").toLowerCase()))
							.filter(item => {
								if (tierFilter !== ""){
									if (item[1].tier === tierFilter) {
										return item;
									} else { return null }
								}
								else {
									return item;
								}
							})
							.filter(item => {
								if (statFilter !== ""){
									const itemKeys = Object.keys(item[1].stats);
									let hasStat = false;
									itemKeys.forEach(stat => {
										if (stat === statFilter) {
											hasStat = true;
										}
									})

									if (hasStat === true){
										return item;
									} else { return null };
								}
								else {
									return item;
								}
							})
							.map(item => (<div className="search-item" onClick={() => {item[1].name = item[0]; this.props.update(item[1]); this.props.exit()}}>
											{item[0].split(/(?=[A-Z])/).map(part => {
												return part[0].toUpperCase() + part.slice(1)
											}).join(" ")}
										</div>)
							)
						}
					</div>
				</div>
				<div className="modal-footer">
					<button onClick={this.props.exit} type="button" className="close-modal-btn">Close</button>
				</div>
			</div>
		)
	}
}

export default ItemModal;
