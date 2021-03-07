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
		let { title, name, update, champ } = this.props;
		const { showpick } = this.state;

		name = name.split("").map((char, idx) => idx === 0 ? char[0].toUpperCase() : char).join("");

		return (
			<div className="saved-champion">
				{
					showpick === false ?
					(
						<div className="top-layer" onClick={this.update}>
							<img src={`https://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/${name}.png`} className="saved-champ-img" alt="" />
							<div className="saved-about-container">
								<p className="saved-title">{title}</p>
								<p className="saved-name">champion: {name}</p>
							</div>
						</div>
					)
					:
					<div className="champ-update-wrapper">
						<p className="rtn" onClick={this.update}>⬅</p>
						<p className="champ-one" onClick={() => update(champ, 0)}>1</p>
						<p className="champ-two" onClick={() => update(champ, 1)}>2</p>
					</div>
				}
			</div>
		)
	}
}

export default SavedChampion;
