import React, { Component } from 'react';
import './App.css';

import ChampionCard from './components/championcard/championcard';
import CalculationArea from './components/calculationarea/calculationarea';
import CharacterSelect from './components/characterselect/characterselect';

// Data

import { ChampionData } from './data/champion';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      championChanged: false,
      mainAlly: {
        name: 'Kennen',
        lv: 1,
        hp: 541,
        lvHp: 84,
        armor: 29,
        lvArmor: 3.75,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 200,
        lvMana: 0,
        attack: 48,
        baseAttack: 48,
        lvAttack: 3.75,
        critDamage: 175,
        critChance: 0,
        ap: 20,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [75,115,155,195,235],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 0.75,
            rname: 'KennenShurikenHurlMissile1'
          },
          {
            base: [60,85,110,135,160],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 0.75,
            rname: 'KennenBringTheLight'
          },
          {
            base: [80,120,160,200,240],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 0.8,
            rname: 'KennenLightningRush'
          },
          {
            base: [300,562.5,825],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 1.5,
            rname: 'KennenShurikenStorm',
            ultimate: true
          }
        ],
        items: [
          {
            img: 1055,
            tier: 'basic',
            stats: {
              ad: 8,
              hp: 80
            }
          },
                  {
            img: 1055,
            tier: 'basic',
            stats: {
              ad: 8,
              hp: 80
            }
          },
                  {
            img: 1055,
            tier: 'basic',
            stats: {
              ad: 8,
              hp: 80
            }
          },
          {
            img: 1056,
            tier: 'basic',
            stats: {
              hp: 70,
              ap: 15
            }
          },
                  {
            img: 1056,
            tier: 'basic',
            stats: {
              hp: 70,
              ap: 15
            }
          },
                  {
            img: 1056,
            tier: 'basic',
            stats: {
              hp: 70,
              ap: 15
            }
          },
        ],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg',
        runes: {
          precision: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          domination: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false,
            node10: false
          },
          sorcery: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          resolve: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          inspiration: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          minor: {
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          }
        },
        buffs: {
          elixIron: false,
          elixWrath: false,
          elixSorc: false,
          baron: false,
          inf1: false,
          inf2: false,
          mount1: false,
          mount2: false
        }
      },
      mainEnemy: {
        name: 'Lux',
        lv: 1,
        hp: 490,
        lvHp: 85,
        armor: 18.72,
        lvArmor: 4,
        resist: 30,
        lvResist: 0.5,
        movement: 330,
        mana: 480,
        lvMana: 23.5,
        attack: 53.54,
        baseAttack: 53.54,
        lvAttack: 3.3,
        critDamage: 175,
        critChance: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,125,170,215,260],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 0.6,
            rname: 'LuxLightBinding'
          },
          {
            base: [90,130,170,210,250],
            scale: 'ap',
            damage: 'magical',
            type: 'shield',
            ratio: 0.7,
            rname: 'LuxPrismaticWave'
          },
          {
            base: [60,105,150,195,240],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 0.6,
            rname: 'LuxLightStrikeKugel'
          },
          {
            base: [300,400,500],
            scale: 'ap',
            damage: 'magical',
            type: 'damage',
            ratio: 1,
            rname: 'LuxMaliceCannon'
          }
        ],
        items: [
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
          {
            img: 1083,
            tier: 'basic',
            stats: {
              ad: 7
            }
          },
        ],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
        runes: {
          precision: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          domination: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false,
            node10: false
          },
          sorcery: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          resolve: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          inspiration: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          minor: {
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          }
        },
        buffs: {
          elixIron: false,
          elixWrath: false,
          elixSorc: false,
          baron: false,
          inf1: false,
          inf2: false,
          mount1: false,
          mount2: false
        }
      }
    }

    this.modifyRune = this.modifyRune.bind(this);
    this.modifyBuff = this.modifyBuff.bind(this);
    this.updateChampion = this.updateChampion.bind(this);
    this.updateSkillLevel = this.updateSkillLevel.bind(this);
  }

  modifyRune(type, rune, target){
    if (target === "mainAlly"){
      const { mainAlly } = this.state;
      mainAlly.runes[type][rune] = !mainAlly.runes[type][rune];
      this.setState({mainAlly})
    }
    else if (target === "mainEnemy"){
      const { mainEnemy } = this.state;
      mainEnemy.runes[type][rune] = !mainEnemy.runes[type][rune];
      this.setState({mainEnemy})
    }
    else {
      return;
    }
  }

  modifyBuff(name, type, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;

    champion.buffs[name] = !champion.buffs[name];

    if (type === "elixir"){
       if (name === "elixSorc"){
        champion.buffs.elixWrath = false;
        champion.buffs.elixIron = false;
       }
       else if (name === "elixWrath"){
        champion.buffs.elixIron = false;
        champion.buffs.elixSorc = false;
       }
       else {
        champion.buffs.elixWrath = false;
        champion.buffs.elixSorc = false;
       }
    }
    else if (type === "infernal") {
      if (name === "inf1"){
        champion.buffs.inf2 = false;
      } else {
        champion.buffs.inf1 = false;
      }
    }
    else if (type === "mountain") {
      if (name === "mount1"){
        champion.buffs.mount2 = false;
      }
      else {
        champion.buffs.mount1 = false;
      }
    }

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"] : champion
    })
  }

  updateChampion(champion, target){
    try {
      const selectedChampion = ChampionData[champion.toLowerCase()];
      const championKeys = Object.keys(selectedChampion);
      const clonedChampion = {};

      championKeys.map(key => {
        clonedChampion[key] = selectedChampion[key]
      })

      clonedChampion.buffs = {
          elixIron: false,
          elixWrath: false,
          elixSorc: false,
          baron: false,
          inf1: false,
          inf2: false,
          mount1: false,
          mount2: false
      };

      clonedChampion.runes = {
          precision: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          domination: {
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false,
            node10: false
          },
          sorcery: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          resolve: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          inspiration: {
            key1: false,
            key2: false,
            key3: false,
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          },
          minor: {
            node1: false,
            node2: false,
            node3: false,
            node4: false,
            node5: false,
            node6: false,
            node7: false,
            node8: false,
            node9: false
          }
      }

      this.setState({
        [target === "mainAlly" ? "mainAlly": "mainEnemy"]: clonedChampion,
        championChanged: true
      })
    }
    catch {
      return;
    }
  }

  updateSkillLevel(skill, inc, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    champion[`abilitylv${skill}`] = inc === "add" ? champion[`abilitylv${skill}`] + 1 : champion[`abilitylv${skill}`] - 1;

    if (champion[`abilitylv${skill}`] < 0){
      champion[`abilitylv${skill}`] = 0;
    }
    else if (champion[`abilitylv${skill}`] > 4){
      champion[`abilitylv${skill}`] = 4;
    }

    console.log(skill)
    console.log(champion[`abilitylv${skill}`])

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"]:champion
    })

    console.log(this.state)
  }

  render(){
    const { mainAlly, mainEnemy } = this.state;

    return (
      <div className="App">
        <div className="app-background"></div>
        <header className="champion-select">
          <div className="allies">
            <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainAlly")} />
            <ChampionCard skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainAlly")} champion={mainAlly} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainAlly")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainAlly")} />
          </div>
          <div className="enemy">
            <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainEnemy")} />
            <ChampionCard skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainEnemy")} champion={mainEnemy} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainEnemy")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainEnemy")} />
          </div>
        </header>
        <CalculationArea ally={this.state.mainAlly} enemy={this.state.mainEnemy} update={true} />
      </div>
    );
  }
}

export default App;
