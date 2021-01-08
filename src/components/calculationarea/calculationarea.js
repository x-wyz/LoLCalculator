import React, { Component } from 'react';

import './calculationarea.css';

class CalculationArea extends Component {
	constructor(props){
		super(props);
		this.state = {
			enemyTab: false 
		}
	}

	switchTab(bool){
		this.setState({
			enemyTab: bool
		})
	}

	render(){
		const { enemyTab } = this.state;

		return (
			<div className="calculation-area">
				<header className="calculation-header">
					<h3 onClick={() => this.switchTab(false)} className={`allied-tab ${enemyTab ? 'not-current-tab' : null}`}>Ally</h3>
					<h3 onClick={() => this.switchTab(true)} className={`enemy-tab ${!enemyTab ? 'not-current-tab' : null}`}>Enemy</h3>
				</header>
				<div className="calculation-body">

				</div>
			</div>
		)
	}
}

export default CalculationArea;
