import React, { Component } from 'react';
import './savemodal.css';

import SI from '../../assets/si_crest.png';

class SaveModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 0,
			importText: ""
		}

		this.setPage = this.setPage.bind(this);
		this.updateImport = this.updateImport.bind(this);
		this.importData = this.importData.bind(this);
	}

	importData(type){
		const { importText } = this.state;
		const { importData } = this.props;

		if (type === 1) {
			importData(importText, 1);
		} else {
			importData(importText, 2);
		}

	}

	setPage(n){
		this.setState({
			page: n
		})
	}

	updateImport(event){
		this.setState({
			importText: event.target.value
		})
	}

	extractData(champ){
		if (champ.name === "target") {
			return (<p className="target-dummy-save">
				<img src={SI} className="target-dummy-save-placeholder" alt=""/>
			</p>)
		}

		const runeKeys = Object.keys(champ.runes);
		const buffKeys = Object.keys(champ.buffs);

		const Data = [
			["champion", champ.name],
			["level", champ.lv],
			["ability1", champ.ability1],
			["ability2", champ.ability2],
			["ability3", champ.ability3],
			["ability4", champ.ability4],
			[],
			{

			},
			[]
		]

		champ.items.forEach(item => {
			if (item.name !== undefined){
				Data[6].push(item.name)
			}
		})

		runeKeys.forEach(tree => {
			let treeKeys = Object.keys(champ.runes[tree]);
			treeKeys.forEach(node => {
				if (champ.runes[tree][node] === true){
					if (Data[7][tree] !== undefined) {
						Data[7][tree].push(node)
					} else {
						Data[7][tree] = [node]
					}
				}
			})
		})

		buffKeys.forEach(buff => {
			if (champ.buffs[buff] === true){
				Data[8].push(buff)
			}
		})

		const runeTrees = Object.keys(Data[7]);

		return (
			<p className="champion-export-data">
				{
					Data.map((info, idx) => {
						if (idx > 5) {
							return null;
						}
						else {
							return <span className="export-datum">{`${info[0]}:${info[1]},`}</span>
						}
					})
				}
				<span className="export-datum">{`items:[${Data[6].join(" - ")}],`}</span>
				{
					runeTrees.map((tree) => <span className="export-datum">{`${tree}:[${Data[7][tree].join(" - ")}],`}</span>)
				}
				<span className="export-datum">{`buffs:[${Data[8].join(" - ")}],`}</span>
			</p>
		);
	}

	exportPage(){
		const {ally, enemy} = this.props;

		return (
			<div className="export-contents">
				<div className="export-data-text">
					{
						this.extractData(ally)
					}
				</div>

				<div className={`export-data-text ${enemy.name === "target" ? "export-data-dummy" : null}`}>
					{
						this.extractData(enemy)
					}
				</div>
			</div>
		)
	}

	importPage(){
		const {importText} = this.state;

		return (<div className="import-contents">
			<textarea value={importText} className="import-text" onChange={this.updateImport} />
			<p className="import-note">**Give your imports a name by adding (name: -replace this text-,)</p>
			<p className="import-note">**When importing multiple champions separate each entry with an ampersand(&) in front of champion ie. (&champion: annie,)</p>
			<div className="import-button-container">
				<button className="import-button" type="button" onClick={() => this.importData(1)}>Import Single</button>
				<button className="import-button" type="button" onClick={() => this.importData(2)}>Import Multi</button>
			</div>
		</div>)
	}

	render(){
		const {close} = this.props;
		const {page} = this.state;

		return (
			<div className="items-modal">
				<div className="modal-content modal-content-save">
					<div className="save-modal-tabs">
						<h4 className={page === 0 ? "active-export-tab" : null} onClick={() => this.setPage(0)}>Export</h4>
						<h4 className={page === 1 ? "active-export-tab" : null} onClick={() => this.setPage(1)}>Import</h4>
					</div>
					<div className="save-modal-body">
						{
							page === 0 ? this.exportPage() : this.importPage()
						}
					</div>
				</div>
				<div className="modal-footer">
					<button onClick={close} type="button" className="close-modal-btn">Close</button>
				</div>
			</div>
		)
	}
}

export default SaveModal;
