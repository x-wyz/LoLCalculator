import React from 'react';
import './characterselect.css';

const CharacterSelect = ({ onChange, championlist }) => {
	const championlistKeys = Object.keys(championlist);

	return (
		<div className="character-select">
			<input list="championlist" name="champion" id="champion-options" />
			<datalist id="championlist">
				{
					championlistKeys.map(key => <option value={key.toUpperCase()} />)
				}
			</datalist>
			<button type="button" className="update-champ-btn">Update</button>
		</div>
	)
}

export default CharacterSelect;
