import React, { Component } from 'react';
import './savemodal.css';

class SaveModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 0
		}

		this.setPage = this.setPage.bind(this);
	}

	setPage(n){
		this.setState({
			page: n
		})
	}

	extractData(champ){
		const runeKeys = Object.keys(champ.runes);
		const buffKeys = Object.keys(champ.buffs);

		const Data = [
			["champion", champ.name],
			["level", champ.lv],
			["ability1", champ.abilitylv1 + 1 ],
			["ability2", champ.abilitylv2 + 1],
			["ability3", champ.abilitylv3 + 1],
			["ability4", champ.abilitylv4 + 1],
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
							return;
						}
						else {
							return <span className="export-datum">{`${info[0]}:${info[1]},`}</span>
						}
					})
				}
				<span className="export-datum">{`items:${Data[6]},`}</span>
				{
					runeTrees.map((tree) => <span className="export-datum">{`${tree}:${Data[7][tree]}`}</span>)
				}
				<span className="export-datum">{`buffs:${Data[8]},`}</span>
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

				<div className="export-data-text">
					{
						this.extractData(enemy)
					}
				</div>
			</div>
		)
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
							page === 0 ? this.exportPage() : null
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
