import React from 'react';
import './characterselect.css';

const CharacterSelect = ({ onChange, championlist }) => {
	return (
		<div className="character-select">
			<input list="champions" name="champion" id="championlist" />
			<datalist id="championlist">
			</datalist>
		</div>
	)
}

export default CharacterSelect;
