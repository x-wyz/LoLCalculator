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
      itemsModal: this.props.champion.name === "test" ? 1 : false
    }

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  nextPage(){
    const { page } = this.state;

    if (page == 4){
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
        page: 4
      })
    }
    else {
      this.setState({
        page: page - 1
      })
    }
  }

  page0(){
    const { champion, className } = this.props;

    return (
      <section>
        <div className="champion-data-container">
          <section className="champion-stats">
            <h6 className="champion-section-heading">Stats</h6>
            <div className="champion-section-content">
              <div className="champion-stat-section">
                <ChampionStatCard name="health" amount={champion.hp} lvup={champion.lvHp} />
                <ChampionStatCard name="mana" amount={champion.mana} lvup={champion.lvMana} />
              </div>
              <div className="champion-stat-section">
                <ChampionStatCard name="attack damage" amount={champion.attack} lvup={champion.lvAttack} />
                <ChampionStatCard name="ability power" amount={champion.ap} />
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
                champion.abilities.map((ability, idx) => <ChampionSkillCard update={this.props.skillUpdate} currentLv={champion[`abilitylv${idx+1}`]} skillPosition={idx+1} skill={ability} ultimate={idx === 3 ? true : false} />)
              }
            </div>
          </section>
          <section className="champion-items">
            <h6 className="champion-section-heading">Items</h6>
            <div className="champion-section-content">
              {
                champion.items.map((item, idx) => <ChampionItemCard item={item} slot={idx + 1} />)
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

  showModal(){
    return <ItemModal />
  }

  render(){
    const { page, itemsModal } = this.state;
    const { champion, className } = this.props;

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
            this.page4()
          }
          <div className="previous-page" onClick={this.previousPage} >←&nbsp;&nbsp;&nbsp;</div>
          <div className="next-page" onClick={this.nextPage} >&nbsp;&nbsp;&nbsp;→</div>
        </div>
      </React.Fragment>
    )
  }
}

export default ChampionCard;
