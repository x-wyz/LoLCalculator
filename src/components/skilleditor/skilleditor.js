import React, {Component} from 'react';
import "./skilleditor.css";
import { duplicate, checkNaN } from '../../data/general';

class SkillEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			skillType: props.skill.type || "utility",
			ability: props.skill.skill || "passive",
			damage: props.skill.damage || "none",
			ad: props.skill.ad || 0,
			bAd: props.skill.bAd || 0,
			ap: props.skill.ap || 0,
			note: props.skill.note || "",
			mhp: props.skill.mhp || 0,
			ar: props.skill.ar || 0,
			res: props.skill.res || 0,
			lvScale: props.skill.lvScale || [0,0],
			emhp: props.skill.emhp || 0,
			base: props.skill.base !== undefined ? props.skill.base : [0],
			cooldown: props.skill.cd !== undefined ? props.skill.cd[0] : 0,
			emhpScaleAp: props.skill.emhpScale !== undefined && props.skill.emhpScale[2] === "ap" ? props.skill.emhpScale[0] : 0,
			emhpScaleBAD: props.skill.emhpScale !== undefined && props.skill.emhpScale[2] === "bAd" ? props.skill.emhpScale[0] : 0,
		}

		this.updateValue = this.updateValue.bind(this);
		this.pushNewAbility = this.pushNewAbility.bind(this);
	}

	updateValue(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	parseValue(x){
		x = String(x);
		let value = x.split(",");
		if (value.length === 1){
			return checkNaN(value[0]) ? 0 : parseFloat(value[0])
		}
		else if (value.length === 0){
			return 0;
		}
		else {
			let parsedValue = value.map(x => {
				return checkNaN(x) ? 0 : parseFloat(x)
			})
			return parsedValue;
		}
	}

	pushNewAbility(){
		const { damage, ad, bAd, ap, note, mhp, ar, res, lvScale, emhp, cooldown, emhpScaleBAD, emhpScaleAp, base } = this.state;
		const newAbility = duplicate(this.props.skill);
		newAbility.damage = damage;
		newAbility.ad = this.parseValue(ad);
		newAbility.bAd = this.parseValue(bAd);
		newAbility.ap = this.parseValue(ap);
		newAbility.note = note;
		newAbility.mhp = this.parseValue(mhp);
		newAbility.ar = this.parseValue(ar);
		newAbility.res = this.parseValue(res);
		newAbility.lvScale = this.parseValue(lvScale);
		newAbility.emhp = this.parseValue(emhp);
		newAbility.cd[0] = this.parseValue(cooldown);
		newAbility.emhpScale = parseFloat(emhpScaleAp) > 0 ? [this.parseValue(emhpScaleAp), 100, "ap"] : newAbility.emhpScale;
		newAbility.emhpScale = parseFloat(emhpScaleBAD) > 0 ? [this.parseValue(emhpScaleBAD), 100, "bAd"] : newAbility.emhpScale;
		newAbility.base = this.parseValue(base);

		this.props.apply(newAbility);
		this.props.exit();
	}

	render(){
		const { skillType, ability, damage, ad, bAd, ap, note, mhp, ar, res, lvScale, emhp, cooldown, emhpScaleBAD, emhpScaleAp, base } = this.state;

		return (
			<div className="skilleditor-bg">
				<div className="skilleditor">
					<h3 className="skill-editor-header">Skill Editor</h3>
					<div className="editor">
						<div className="editor-column">
							<h4 className="editor-column-header">General</h4>
							<div className="editor-value">
								<p className="edit-description">Skill Type</p>
								<p className="edit-value-static">{skillType.toUpperCase()}</p>
							</div>
							<div className="editor-value">
								<p className="edit-description">Ability/Skill</p>
								<p className="edit-value-static">{ability}</p>
							</div>
							<div className="editor-value">
								<p className="edit-description">Damage Type</p>
								<select className="editor-selector" name="damage" onChange={this.updateValue} >
									<option className="editor-select-options" selected={damage === "physical" ? true : false} value="physical">Physical</option>
									<option className="editor-select-options" selected={damage === "magical" ? true : false} value="magical">Magical</option>
									<option className="editor-select-options" selected={damage === "true" ? true : false} value="magical">True</option>
									<option className="editor-select-options" selected={damage === "none" ? true : false} value="magical">None</option>
								</select>
							</div>
							<div className="editor-value">
								<p className="edit-description">Notes</p>
								<textarea className="edit-value-long-value" name="note" onChange={this.updateValue} value={note}></textarea>
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Self Scaling(%)</h4>
							<div className="editor-value">
								<p className="edit-description">Total AD</p>
								<input type="text" className="edit-value" name="ad" value={ad} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Bonus AD</p>
								<input type="text" className="edit-value" name="bAd" value={bAd} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Ability Power</p>
								<input type="text" className="edit-value" name="ap" value={ap} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Max HP</p>
								<input type="text" className="edit-value" name="mhp" value={mhp} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Armor</p>
								<input type="text" className="edit-value" name="ar" value={ar} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Magic Resist</p>
								<input type="text" className="edit-value" name="res" value={res} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Level Scaling</p>
								<input type="text" className="edit-value" name="lvScale" value={lvScale} onChange={this.updateValue}/>
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Others</h4>
							{
								ability > 0 ?
								(<div className="editor-value">
									<p className="edit-description">Ability Level</p>
									<input type="text" className="edit-value" name="base" value={base} onChange={this.updateValue}/>
								</div>)
								:
								null
							}
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP</p>
								<input type="text" className="edit-value" name="emhp" value={emhp} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Cooldown</p>
								<input type="text" className="edit-value" name="cooldown" value={cooldown} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP/100 AP</p>
								<input type="text" className="edit-value" name="emhpScaleAp" value={emhpScaleAp} onChange={this.updateValue}/>
							</div>
							<div className="editor-value">
								<p className="edit-description">Enemy Max HP/100 BonusAD</p>
								<input type="text" className="edit-value" name="emhpScaleBAD" value={emhpScaleBAD} onChange={this.updateValue}/>
							</div>
						</div>
						<div className="editor-column">
							<h4 className="editor-column-header">Actions</h4>
							<button type="button" className="editor-button edit-save" onClick={this.pushNewAbility}>Save</button>
							<button type="button" className="editor-button edit-discard" onClick={this.props.exit}>Discard</button>
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
