import React, {Component} from 'react';
import './savedchampion.css';

class SavedChampion extends Component {
	constructor(props){
		super(props);
		this.state = {
			showpick: false
		}

		this.update = this.update.bind(this);
	}

	update(){
		this.setState({
			showpick: !this.state.showpick
		})
	}

	render(){
		const { title, name, update, champ } = this.props;
		const { showpick } = this.state;

		return (
			<div className="saved-champion">
				<div className="top-layer" onClick={this.update}>
					<p className="saved-title">{title}</p>
					<p className="saved-name">champion: {name}</p>
				</div>
				<div className={`champ-updater ${showpick === false ? "hide-champion-updater" : null}`}>
					<div className="champ-update-wrapper">
						<p className="champ-one" onClick={() => update(champ, 0)}>1</p>
					</div>
					<div className="champ-update-wrapper">
						<p className="champ-two" onClick={() => update(champ, 1)}>2</p>
					</div>
				</div>
			</div>
		)
	}
}

export default SavedChampion;
