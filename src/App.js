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
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [40, 65, 90, 115, 140],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 35,
            bAd: 0,
            rname: 'AhriOrbofDeception',
            note: "non-true damage hit"
          },
          {
            base: [64, 104, 148, 184, 224],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 48,
            bAd: 0,
            rname: 'AhriFoxFire'
          },
          {
            base: [60,90,120,150,180],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 40,
            bAd: 0,
            rname: 'AhriSeduce',
          note: "Does not include 20% increased damage on other abilities."
          },
          {
            base: [180,270,360],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 105,
            bAd: 0,
            rname: 'AhriTumble'
          }
        ],
        items: [
          {},
          {},
          {},
          {},
          {},
          {},
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
        attack: 53,
        baseAttack: 53,
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
        items: [{},{},{},{},{},{},],
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
    this.updateItem = this.updateItem.bind(this);
    this.levelup = this.levelup.bind(this);
  }

  levelup(type, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    
    if (type === "levelup"){
      if (champion.lv === 18) return;
      champion.hp = champion.hp + champion.lvHp;
      champion.armor = champion.armor + champion.lvArmor;
      champion.resist = champion.resist + champion.lvResist;
      champion.attack = champion.attack + champion.lvAttack;
      champion.mana = champion.mana + champion.lvMana;
      champion.lv = champion.lv + 1
    }
    else if (type === "leveldown"){
      if (champion.lv === 1) return;
      champion.hp = champion.hp - champion.lvHp;
      champion.armor = champion.armor - champion.lvArmor;
      champion.resist = champion.resist - champion.lvResist;
      champion.attack = champion.attack - champion.lvAttack;
      champion.mana = champion.mana - champion.lvMana;
      champion.lv = champion.lv - 1
    }

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"] : champion
    })
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

  updateItem(newItem, slot, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    const previousItem = champion.items[slot];
    champion.items[slot] = newItem;

    const newItemKey = Object.keys(newItem.stats)

    if (previousItem.stats !== undefined) {
      const previousItemKey = Object.keys(previousItem.stats);
      previousItemKey.map(stat => {
        let championStat = stat === "ad" ? "attack" : stat
        champion[stat] = champion[stat] - previousItem.stats[stat];
      })
    }

    newItemKey.map(stat => {
      let championStat = stat === "ad" ? "attack" : stat
      champion[championStat] = champion[championStat] + newItem.stats[stat]
    })

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"]: champion
    })
  }

  render(){
    const { mainAlly, mainEnemy } = this.state;

    return (
      <div className="App">
        <div className="app-background"></div>
        <header className="champion-select">
          <div className="allies">
            <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainAlly")} />
            <ChampionCard level={(type) => this.levelup(type, "mainAlly")} updateItem={(newItem, slot) => this.updateItem(newItem, slot, "mainAlly")} skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainAlly")} champion={mainAlly} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainAlly")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainAlly")} />
          </div>
          <div className="enemy">
            <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainEnemy")} />
            <ChampionCard level={(type) => this.levelup(type, "mainEnemy")} updateItem={(newItem, slot) => this.updateItem(newItem, slot, "mainEnemy")} skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainEnemy")} champion={mainEnemy} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainEnemy")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainEnemy")} />
          </div>
        </header>
        <CalculationArea ally={this.state.mainAlly} enemy={this.state.mainEnemy} update={true} />
      </div>
    );
  }
}

export default App;
