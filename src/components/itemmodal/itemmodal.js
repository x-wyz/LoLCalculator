import React, { Component } from 'react';
import "./itemmodal.css";

import { ItemsData } from '../../data/items';

const itemsKeys = Object.keys(ItemsData);
const itemsArray = itemsKeys.map(item => [item, ItemsData[item]]);

class ItemModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			search: ""
		}
		this.update = this.update.bind(this);
	}

	update(event){
		this.setState({search: event.target.value})
	}

	render(){
		const { search } = this.state;

		return (
			<div className="items-modal">
				<div className="modal-content">
					<div className="items-search-form">
						<h3 className="items-selector-title">Item Selector</h3>
						<input className="items-search-field" onChange={this.update} value={search} />
					</div>
					<div className="items-search-results">
						{
							itemsArray
							.filter(item => item[0].toLowerCase().includes(search.replaceAll(" ", "").toLowerCase()))
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
