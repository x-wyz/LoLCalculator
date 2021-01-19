import React, { Component } from 'react';

import './championcard.css';
import ChampionStatCard from '../championstatcard/championstatcard';
import ChampionSkillCard from '../championskillcard/championskillcard';
import ChampionItemCard from '../championitemcard/championitemcard';

//  Rune images

class ChampionCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0
    }

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    const { page } = this.state;

    if (page == 3){
      this.setState({
        page: 0
      })
    }
    else {
      this.setState({
        page: page++
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
                champion.abilities.map(ability => <ChampionSkillCard currentLv={1} skill={ability} />)
              }
            </div>
          </section>
          <section className="champion-items">
            <h6 className="champion-section-heading">Items</h6>
            <div className="champion-section-content">
              {
                champion.items.map((item, idx) => <ChampionItemCard name={item.name} stats={item.stats} ico={item.icon} slot={idx + 1} />)
              }
            </div>
          </section>
        </div>
      </section>
    )
  }

  render(){
    const { page } = this.state;
    const { champion, className } = this.props;

    return (
      <div className="champion-card">
        <div className={`champion ${className}`} style={{backgroundImage: `url(${champion.image})`}}>
          <div className="dark-glass"></div>
        </div>
        {
          page === 0 
          ?
          this.page0()
          :
          null 
        }
        <div className="next-page">&nbsp;&nbsp;&nbsp;→</div>
      </div>
    )
  }
}

export default ChampionCard;
