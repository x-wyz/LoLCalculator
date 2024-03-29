import React from 'react';
import './calcskill.css';

import SI from '../../assets/si_crest.png';

import { calculateSkill } from '../../data/functions';
import SkillEditor from "../skilleditor/skilleditor";

class CalcSkill extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}

		this.showEditor = this.showEditor.bind(this);
		this.showModal = this.showModal.bind(this);
	}

	showModal(){
		const { showModal } = this.state;
		this.setState({
			showModal: !showModal
		})
	}

	showEditor(){
		let {skill, updateSkill} = this.props;
		return <SkillEditor skill={skill} apply={updateSkill} exit={this.showModal}/>
	}

	render(){
		let { ally, enemy, skill, skillLv, buff } = this.props;
		skillLv -= 1;
		const skillresults = calculateSkill(ally, enemy, skill, skillLv);
		
		return (
			<section className={`skill-calculations-container ${skill.buff !== undefined ? `${ally[skill.buff] !== false ? "skill-has-active-buff" : "skill-has-inactive-buff"} skill-has-buff`: null} skill-calculation-body`} onClick={skill.buff !== undefined ? () => buff(skill.buff) : null}>

				{
					skillLv === -1 ? (<div className="empty-skill-calc">
						<img src={SI} className="skill-placeholder-img" alt=""/>
					</div>)
					:
					null
				}
				{
					this.state.showModal === true ? this.showEditor() : null
				}
				<div className="skill-modifier" onClick={this.showModal}></div>
				<div className="skill-calculation-body">
					<div className="skill-cooldown">
						<h6 className="skill-cooldown-header">CD</h6>
						<p className="skill-cooldown-text">
							{
								Number.isNaN(skillresults.cooldown) || skillresults.cooldown === 0 || skillLv === -1 ? "---" : skillresults.cooldown.toFixed(1)
							}
						</p>
					</div>
					<div className="calc-skill-icon" style={
						skill.skill > 0 ?
						{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${skill.rname}.png)`}
						:
						{backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/11.4.1/img/passive/${skill.rname}.png)`}
					}></div>
					<div className="skill-calculations">
						{
							skill.type === "damage" || skill.damage !== undefined
							?
							(
							<React.Fragment>
								<div className="skill-information-container">
									<p className="calculation-description">Pre-Mit</p>
									<p className="calculation-results">{Number.isNaN(skillresults.totalDamage) ? 0 : skillresults.totalDamage.toFixed(0)}</p>
								</div>
								<div className="skill-information-container">
									<p className="calculation-description">Multiplier</p>
									<p className="calculation-results">{Number.isNaN(skillresults.multiplier) ? 0 : skillresults.multiplier.toFixed(2)}</p>
								</div>
							</React.Fragment>
							)
							:
							null
							}
						<div className="skill-information-container">
							<p className="calculation-description">{skill.type === "heal" ? "Restore" : skill.type === "shield" ? "Shield" : "Damage"}</p>
							<p className="calculation-results">{Number.isNaN(skillresults.finalDamage) ? 0 : skillresults.finalDamage.toFixed(1)}</p>
						</div>
						<div className="skill-information-container">
							<p className="calculation-description">Percentage</p>
							<p className="calculation-results">{Number.isNaN(skillresults.percentage) ? 0 : skillresults.percentage.toFixed(1)}%</p>
						</div>
					</div>
				</div>
				{
					skill.note !== undefined 
					?
					(<div className="skill-notes">
						<p className="skill-notes-heading">
							NOTES
						</p>
						{
							skill.note
						}
					</div>)
					:
					null
				}
			</section>
		)
	}
}

export default CalcSkill;
