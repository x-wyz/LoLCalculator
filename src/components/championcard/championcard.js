import React, { Component } from 'react';

import './championcard.css';
import ChampionStatCard from '../championstatcard/championstatcard';
import ChampionSkillCard from '../championskillcard/championskillcard';
import ChampionItemCard from '../championitemcard/championitemcard';

import ChampionBuffs from '../championbuffs/championbuffs';

import ItemModal from '../itemmodal/itemmodal';

//  Rune pages

import Precision from '../runeprecision/runeprecision';
import Domination from '../runedomination/runedomination';
import Sorcery from '../runesorcery/runesorcery';
import Resolve from '../runeresolve/runeresolve';
import Inspiration from '../runeinspiration/runeinspiration';
import Minor from '../runeminor/runeminor';

class ChampionCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      itemsModal: false,
      title: ""
    }

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.exitModal = this.exitModal.bind(this);
    this.useModal = this.useModal.bind(this);

    this.updateTitle = this.updateTitle.bind(this);
    this.save = this.save.bind(this);
  }

  save(){
    const { champion, save } = this.props;
    const { title } = this.state;

    save(title, champion.name, champion);

    this.setState({
      title: ""
    })
  }

  updateTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  exitModal(){
    this.setState({itemsModal: false})
  }

  useModal(slot){
    this.setState({itemsModal: slot})
  }

  nextPage(){
    const { page } = this.state;

    if (page === 6){
      this.setState({
        page: 0
      })
    }
    else {
      this.setState({
        page: page + 1
      })
    }
  }

  previousPage(){
    const { page } = this.state;

    if (page === 0){
      this.setState({
        page: 6
      })
    }
    else {
      this.setState({
        page: page - 1
      })
    }
  }

  page0(){
    const { champion, updatedChamp } = this.props;
    let skillsCount = 0; 

    // checks if champion has a deathcap
    const deathCap = champion.items.filter(item => item.img === 3089).length >= 1 ? true : false;

    return (
      <section>
        <div className="champion-data-container">
          <section className="champion-stats">
            <h6 className="champion-section-heading">Stats</h6>
            <div className="champion-section-content">
              <div className="champion-stat-section">
                <ChampionStatCard name="health" amount={updatedChamp.hp} lvup={updatedChamp.lvHp} />
                <ChampionStatCard name="mana" amount={updatedChamp.mana} lvup={updatedChamp.lvMana} />
              </div>
              <div className="champion-stat-section">
                <ChampionStatCard name="attack damage" amount={updatedChamp.attack.toFixed(1)} lvup={updatedChamp.lvAttack} />
                {
                  deathCap
                  ?
                  <ChampionStatCard name="ability power" amount={updatedChamp.ap * 1.3} />
                  :
                  <ChampionStatCard name="ability power" amount={updatedChamp.ap} />
                }
              </div>
              <div className="champion-stat-section">
                <ChampionStatCard name="armor" amount={champion.armor} lvup={champion.lvArmor} />
                <ChampionStatCard name="magic resist" amount={champion.resist} lvup={champion.lvResist} />
              </div>
            </div>
          </section>
          <section className="champion-skills">
            <h6 className="champion-section-heading">Skills</h6>
            <div className="champion-section-content">
              {
                champion.abilities
                .filter(ability => ability.skill !== 0)
                .map((ability, idx) => {
                  if (ability.skill > skillsCount) {
                    skillsCount += 1;
                    return <ChampionSkillCard update={this.props.skillUpdate} currentLv={champion[`abilitylv${skillsCount}`]} skillPosition={skillsCount} skill={ability} ultimate={skillsCount === 4 ? true : false} />;
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </section>
          <section className="champion-items">
            <h6 className="champion-section-heading">Items</h6>
            <div className="champion-section-content">
              {
                champion.items.map((item, idx) => <ChampionItemCard showModal={() => this.useModal(idx)} item={item} slot={idx + 1} />)
              }
            </div>
          </section>
        </div>
      </section>
    )
  }

  page1(){
    const { champion } = this.props;

    return (
      <div className="rune-pages">
        <Precision currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
        <Domination currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
      </div>
    )
  }

  page2(){
    const { champion } = this.props;

    return (
      <div className="rune-pages">
        <Sorcery currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
        <Resolve currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
      </div>
    )
  }

  page3(){
    const { champion } = this.props;

    return (
      <div className="rune-pages">
        <Inspiration currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
        <Minor currentrunes={champion.runes} updateRuneStatus={this.props.modifyRune} />
      </div>
    )
  }

  page4(){
    return (
      <div className="rune-pages">
        <ChampionBuffs currentBuffs={this.props.champion.buffs} modifyBuff={this.props.modifyBuff}/>
      </div>
    )
  }

  page5(){
    const { champion } = this.props;

    return (
      <div className="lv-controls">
         <div className="lv-controls-left">
          <div className="lv-controls-stats">
            <p className="lv-controls-stat"></p>
            <p className="lv-controls-stat lv-controls-stat-name">Level Value</p>
            <p className="lv-controls-stat lv-controls-stat-name">Total Increase</p>
          </div>
          <div className="lv-controls-stats">
            <p className="lv-controls-stat lv-controls-stat-name">Health</p>
            <p className="lv-controls-stat">{champion.lvHp}</p>
            <p className="lv-controls-stat">{champion.lvHp * (champion.lv - 1)}</p>
          </div>
          <div className="lv-controls-stats">
            <p className="lv-controls-stat lv-controls-stat-name">Attack</p>
            <p className="lv-controls-stat">{champion.lvAttack}</p>
            <p className="lv-controls-stat">{(champion.lvAttack * (champion.lv - 1)).toFixed(1)}</p>
          </div>
          <div className="lv-controls-stats">
            <p className="lv-controls-stat lv-controls-stat-name">Armor</p>
            <p className="lv-controls-stat">{champion.lvArmor}</p>
            <p className="lv-controls-stat">{champion.lvArmor * (champion.lv - 1)}</p>
          </div>
          <div className="lv-controls-stats">
            <p className="lv-controls-stat lv-controls-stat-name">Resist</p>
            <p className="lv-controls-stat">{champion.lvResist}</p>
            <p className="lv-controls-stat">{champion.lvResist * (champion.lv - 1)}</p>
          </div>
         </div>
         <div className="lv-controls-right">
          <p className="champion-current-lv">{champion.lv}</p>
            <button className="champion-lv-control" onClick={() => this.props.level(champion.lv + 1)}>Level up</button>
            <button className="champion-lv-control" onClick={() => this.props.level(champion.lv - 1)}>Level down</button>
         </div>
      </div>
    )
  }

  page6(){
    const { title } = this.state;

    return (
      <div className="champ-save-container">
        <h4 className="champ-save-header">Build title</h4>
        <input className="champ-save-title" type="text" value={title} onChange={(e) => this.updateTitle(e)} />
        <button className="champ-save-button" type="button" onClick={this.save}>Save</button>
      </div>
    )
  }

  showModal(slot){
    return <ItemModal exit={this.exitModal} update={(item) => this.props.updateItem(item, slot)} />
  }

  render(){
    const { page, itemsModal } = this.state;
    const { champion, className } = this.props;

    if (champion.name === "target") {
      const { updateDummy } = this.props;
      const { hp, armor, resist } = champion;

      return (<div className="champion-card dummy-card">
          <div className="target-dummy-container">
            <h3 className="target-dummy-header">Dragon Chow</h3>
            <div className="dummy-stat-editor-container">
              <p className="dummy-stat-description">Health</p>
              <input type="number" min="10" max="5000" className="dummy-stat-editor" value={hp} onChange={(val) => updateDummy("hp", val)} />
            </div>
            <div className="dummy-stat-editor-container">
              <p className="dummy-stat-description">Armor</p>
              <input type="number" min="0" max="1500" className="dummy-stat-editor" value={armor} onChange={(val) => updateDummy("armor", val)} />
            </div>
            <div className="dummy-stat-editor-container">
              <p className="dummy-stat-description">Magic Resist</p>
              <input type="number" min="0" max="1500" className="dummy-stat-editor" value={resist} onChange={(val) => updateDummy("resist", val)} />
            </div>
          </div>
        </div>)
    }

    return (
      <React.Fragment>
        {
          itemsModal === false
          ?
          null
          :
          this.showModal(itemsModal)
        }
        <div className="champion-card">
          <div className={`champion ${className}`} style={{backgroundImage: `url(${champion.image})`}}>
            <div className="dark-glass"></div>
          </div>
          {
            page === 0 
            ?
            this.page0()
            :
            page === 1
            ?
            this.page1()
            :
            page === 2 
            ? 
            this.page2()
            :
            page === 3
            ?
            this.page3()
            :
            page === 4
            ?
            this.page4()
            :
            page === 5
            ? 
            this.page5()
            :
            this.page6()
          }
          <div className="previous-page" onClick={this.previousPage} >←&nbsp;&nbsp;&nbsp;</div>
          <div className="next-page" onClick={this.nextPage} >&nbsp;&nbsp;&nbsp;→</div>
        </div>
      </React.Fragment>
    )
  }
}

export default ChampionCard;
