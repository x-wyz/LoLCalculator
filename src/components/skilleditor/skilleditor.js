import React, {Component} from 'react';
import "./skilleditor.css";

class SkillEditor extends Component {
	constructor(props){
		super(props);
		this.state = {

		}

		this.updateValue = this.updateValue.bind(this);
	}

	updateValue(event){
		this.state({
			[event.target.name]: event.target.value
		})
	}

	render(){
		return (
			<div className="skilleditor-bg">
				<div className="skilleditor">
					<h3 className="skill-editor-header">Skill Editor</h3>
					<div className="editor">
						<div className="editor-column">
							<h4 className="editor-column-header">General</h4>
							<div className="editor-value">
								<p className="edit-description">Skill Type</p>
								<p className="edit-value-static">Damage</p>
							</div>
							<div className="editor-value">
								<p className="edit-description">Ability/Skill</p>
								<p className="edit-value-static">1</p>
							</div>
							<div className="editor-value">
								<p className="edit-description">Damage Type</p>
								<select className="editor-selector">
									<option className="editor-select-options" value="physical">Physical</option>
									<option className="editor-select-options" selected={true} value="magical">Magical</option>
								</select>
							</div>
							<div className="editor-value">
								<p className="edit-description">Notes</p>
								<textarea className="edit-value-long-value">Something probably goes here...</textarea>
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Self Scaling(%)</h4>
							<div className="editor-value">
								<p className="edit-description">Total AD</p>
								<input type="text" className="edit-value" name="ad" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Bonus AD</p>
								<input type="text" className="edit-value" name="bAd" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Ability Power</p>
								<input type="text" className="edit-value" name="ap" value={65} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Max HP</p>
								<input type="text" className="edit-value" name="mhp" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Armor</p>
								<input type="text" className="edit-value" name="ar" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Magic Resist</p>
								<input type="text" className="edit-value" name="res" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Level Scaling</p>
								<input type="text" className="edit-value" name="lvScale" value={"10, 100"} />
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Others</h4>
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP</p>
								<input type="text" className="edit-value" name="emhp" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Cooldown</p>
								<input type="text" className="edit-value" value={"10,9,8,7,6"} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP/100 AP</p>
								<input type="text" className="edit-value" name="emhpScaleAp" value={0} />
							</div>
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP/100 BonusAD</p>
								<input type="text" className="edit-value" name="emhpScaleBAD" value={0} />
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Actions</h4>
							<button type="button" className="editor-button edit-save">Save</button>
							<button type="button" className="editor-button edit-discard">Discard</button>
						</div>
					</div>
					<div className="editor-errors">
					</div>
				</div>
			</div>
		)
	}
}

export default SkillEditor;
