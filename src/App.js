import React, { Component } from 'react';
import './App.css';

import ChampionCard from './components/championcard/championcard';
import CalculationArea from './components/calculationarea/calculationarea';
import CharacterSelect from './components/characterselect/characterselect';

import SaveModal from './components/savemodal/savemodal';
import SavedChampion from './components/savedchampion/savedchampion';

// Data

import { ChampionData } from './data/champion';
import { ItemsData } from './data/items';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      championChanged: false,
      showExport: false,
      showSidebar: false,
      savedList: [],
      mainAlly: {
        name: 'annie',
        lv: 1,
        baseHp: 524,
        hp: 524,
        lvHp: 88,
        armor: 19,
        lvArmor: 4,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 418,
        lvMana: 25,
        attack: 50,
        baseAttack: 50,
        lvAttack: 2.63,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        abilityHaste: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        ability1: 0,
        ability2: 0,
        ability3: 0,
        ability4: 0,
        abilities: [
          {
            lvScale: [0,0],
            rname: "Annie_Passive",
            note: "passive",
            skill: 0
          },
          {
            base: [80,115,150,185,220],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 80,
            bAd: 0,
            rname: 'AnnieQ',
            skill: 1
          },
          {
            base: [70,115,160,205,250],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 85,
            bAd: 0,
            rname: 'AnnieW',
            skill: 2
          },
          {
            base: [20,30,40,50,60],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 20,
            bAd: 0,
            rname: 'AnnieE',
            note: "per basic attack taken",
            skill: 3
          },
          {
            base: [150,275,400],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 75,
            bAd: 0,
            rname: 'AnnieR',
            note: "initial summon damage",
            skill: 4
          },
          {
            base: [5,7.5,10],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 3,
            bAd: 0,
            rname: 'AnnieR',
            note: "Tibbers DOT",
            skill: 4
          },
          {
            base: [50,75,100],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 15,
            bAd: 0,
            rname: 'AnnieR',
            note: "Tibbers basic attack",
            skill: 4
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
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
          name: 'annie',
          lv: 1,
          baseHp: 524,
          hp: 524,
          lvHp: 88,
          armor: 19,
          lvArmor: 4,
          resist: 30,
          lvResist: 0.5,
          movement: 335,
          mana: 418,
          lvMana: 25,
          attack: 50,
          baseAttack: 50,
          lvAttack: 2.63,
          critDamage: 175,
          critChance: 0,
          omnivamp: 0,
          abilityHaste: 0,
          lethality: 0,
          arpen: 0,
          mpen: 0,
          flatMPen: 0,
          ap: 0,
          ability1: 0,
          ability2: 0,
          ability3: 0,
          ability4: 0,
          abilities: [
            {
              lvScale: [0,0],
              rname: "Annie_Passive",
              note: "passive",
              skill: 0
            },
            {
              base: [80,115,150,185,220],
              type: "damage",
              damage: "magical",
              ad: 0,
              ap: 80,
              bAd: 0,
              rname: 'AnnieQ',
              skill: 1
            },
            {
              base: [70,115,160,205,250],
              damage: 'magical',
              type: 'damage',
              ad: 0,
              ap: 85,
              bAd: 0,
              rname: 'AnnieW',
              skill: 2
            },
            {
              base: [20,30,40,50,60],
              damage: 'magical',
              type: 'damage',
              ad: 0,
              ap: 20,
              bAd: 0,
              rname: 'AnnieE',
              note: "per basic attack taken",
              skill: 3
            },
            {
              base: [150,275,400],
              damage: 'magical',
              type: 'damage',
              ad: 0,
              ap: 75,
              bAd: 0,
              rname: 'AnnieR',
              note: "initial summon damage",
              skill: 4
            },
            {
              base: [5,7.5,10],
              damage: 'magical',
              type: 'damage',
              ad: 0,
              ap: 3,
              bAd: 0,
              rname: 'AnnieR',
              note: "Tibbers DOT",
              skill: 4
            },
            {
              base: [50,75,100],
              damage: 'magical',
              type: 'damage',
              ad: 0,
              ap: 15,
              bAd: 0,
              rname: 'AnnieR',
              note: "Tibbers basic attack",
              skill: 4
            }
          ],
          items: [{},{},{},{},{},{}],
          image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
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
    }

    this.modifyRune = this.modifyRune.bind(this);
    this.modifyBuff = this.modifyBuff.bind(this);
    this.updateChampion = this.updateChampion.bind(this);
    this.updateSkillLevel = this.updateSkillLevel.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.levelup = this.levelup.bind(this);
    this.showExport = this.showExport.bind(this);
    this.showSidebar = this.showSidebar.bind(this);

    this.setChampion = this.setChampion.bind(this);
    this.saveChampion = this.saveChampion.bind(this);

    this.targetDummy = this.targetDummy.bind(this);
    this.updateDummy = this.updateDummy.bind(this);

    this.parseImport = this.parseImport.bind(this);
  }

  targetDummy(){
    this.setState({
      mainEnemy: {
        name: "target",
        hp: 1000,
        armor: 0,
        resist: 0
      }
    })
  }

  updateDummy(stat, val){
    const { mainEnemy } = this.state;
    val = parseInt(val.target.value);

    if (stat === "hp") {
      val = val > 10000 ? 10000 : val < 10 ? 10 : val;
    }
    else {
      val = val > 2500 ? 2500 : val < 0 ? 0 : val;
    }

    mainEnemy[stat] = val;

    this.setState({
      mainEnemy: mainEnemy
    })
  }

  parseImport(txt, type){
    if (type === 1){
      try {
        let breakdown = txt.replace(/\s/g, "").split(",");
        let title = "";
        breakdown = breakdown
        .filter(n => n.split(":").length === 2)
        .map(val => val.split(":"))
        .map(arr => {
          if (arr[1][0] === "[") {
            return [arr[0], arr[1].replace(/[[\]+]/g,"").split("-")];
          } else {
            title = arr[0] === "name" ? arr[1] : title;
            arr[0] = arr[0] === "name" ? "title" : arr[0] === "level" ? "lv" : arr[0];
            return arr;
          }
        })

        const championName = breakdown.filter(isChar => isChar[0] === "champion")[0][1];
        const champion = ChampionData[championName];
        const newChampion = {};

        const championKeys = Object.keys(champion);
        championKeys.forEach(key => {
          newChampion[key] = champion[key]
        })

        newChampion.runes = {
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

        newChampion.buffs = {
          elixIron: false,
          elixWrath: false,
          elixSorc: false,
          baron: false,
          inf1: false,
          inf2: false,
          mount1: false,
          mount2: false
        };

        breakdown.forEach(data => {
          if (data[0] in newChampion && data[0] !== "items") {
            data[1] = isNaN(data[1]) ? data[1] : parseInt(data[1])
            newChampion[data[0]] = data[1]
          }
          else if (data[0] === "items") {
            data[1].forEach((itemName, idx) => {
              let item = ItemsData[itemName] !== undefined ? ItemsData[itemName] : {};
              newChampion.items[idx] = item;
            })
          }
          else if (data[0] in newChampion.runes) {
            data[1].forEach(node => {
              newChampion.runes[data[0]][node] = true;
            })
          }
          else if (data[0] === "buffs") {
            data[1].forEach(buff => {
              newChampion.buffs[buff] = true;
            })
          }
        })

        newChampion.lv = newChampion.lv > 18 ? 18 : newChampion.lv < 1 ? 1 : newChampion.lv;
        newChampion.attack = newChampion.attack + (newChampion.lvAttack * newChampion.lv - 1);
        newChampion.armor = newChampion.armor + (newChampion.lvArmor * newChampion.lv - 1);
        newChampion.resist = newChampion.resist + (newChampion.lvResist * newChampion.lv - 1);
        newChampion.hp = newChampion.hp + (newChampion.lvHp * newChampion.lv - 1);

        console.log(newChampion)
        this.saveChampion(title, newChampion.name, newChampion);
      }
      catch(e){
        console.log(e);
      }
    }
    else if (type === 2){
      console.log(txt)
    }
    else {
      return;
    }
  }

  saveChampion(title, champ, data){
    const { savedList } = this.state;
    title = title ? title : "undefined";
    savedList.push([title, champ, data]);

    this.setState({
      savedList: savedList
    })

  }

  setChampion(champ, target){
    this.setState({
      [target === 0 ? "mainAlly" : "mainEnemy"]: champ
    })
  }

  showExport(){
    this.setState({
      showExport: !this.state.showExport
    })
  }

  showSidebar(){
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  levelup(lv, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    
    lv = lv > 18 ? 18 : lv < 1 ? 1 : lv

    champion.hp = champion.hp + (lv * champion.lvHp) - (champion.lv * champion.lvHp);
    champion.armor = champion.armor + (lv * champion.lvArmor) - (champion.lv * champion.lvArmor);
    champion.resist = champion.resist + (lv * champion.lvResist) - (champion.lv * champion.lvResist);
    champion.attack = champion.attack + (lv * champion.lvAttack) - (champion.lv * champion.lvAttack);
    champion.mana = champion.mana + (lv * champion.lvMana) - (champion.lv * champion.lvMana);
    champion.lv = lv

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

      championKeys.forEach(key => {
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

  updateSkillLevel(skill, event, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    champion[`ability${skill}`] = event.target.value;

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"]:champion
    })
  }

  updateItem(newItem, slot, target){
    const champion = target === "mainAlly" ? this.state.mainAlly : this.state.mainEnemy;
    const previousItem = champion.items[slot];
    let previousMythic = undefined;
    champion.items.forEach(item => {
      if (item.tier === "mythic"){
        previousMythic = item;
      }
    })

    if (previousMythic !== undefined) {
      const oldMythicKeys = Object.keys(previousMythic.mythic.stats);
      champion.items.forEach(item => {
        if (item.tier === "legendary"){
          oldMythicKeys.forEach(stat => {
            let championStat = stat === "ad" ? "attack" : stat
            champion[championStat] = champion[championStat] - previousMythic.mythic.stats[stat];
          })
        }
      })
    }

    try {
      if (newItem.tier === "shoes"){
        champion.items.forEach((item, idx) => {
          if (item.tier === "shoes") {
            if (slot === idx){
              return;
            }
            else {
              throw new Error("Character cannot have more than one pair of shoes.");
            }
          }
        })
      }

      if (newItem.tier === "mythic"){
        champion.items.forEach((item, idx) => {
          if (item.tier === "mythic") {
            if (slot === idx){
              return;
            }
            else {
              throw new Error("Character cannot have more than one mythic item.");
            }
          }
        })
      }
    }
    catch (err) {
      return err;
    }

    champion.items[slot] = newItem;

    let currentMythic = undefined;
    champion.items.forEach(item => {
      if (item.tier === "mythic"){
        currentMythic = item;
      }
    })

    const newItemKey = Object.keys(newItem.stats)

    if (previousItem.stats !== undefined) {
      const previousItemKey = Object.keys(previousItem.stats);
      previousItemKey.forEach(stat => {
        let championStat = stat === "ad" ? "attack" : stat
        champion[championStat] = champion[championStat] - previousItem.stats[stat];
      })
    }

    newItemKey.forEach(stat => {
      let championStat = stat === "ad" ? "attack" : stat
      champion[championStat] = champion[championStat] + newItem.stats[stat]
    })

    if (currentMythic !== undefined) {
      const currentMythicKeys = Object.keys(currentMythic.mythic.stats);
      champion.items.forEach(item => {
        if (item.tier === "legendary"){
          currentMythicKeys.forEach(stat => {
            let championStat = stat === "ad" ? "attack" : stat
            champion[championStat] = champion[championStat] + currentMythic.mythic.stats[stat];
          })
        }
      })
    }

    this.setState({
      [target === "mainAlly" ? "mainAlly" : "mainEnemy"]: champion
    })
  }

  render(){
    const { mainAlly, mainEnemy, showExport, showSidebar, savedList } = this.state;

    return (
      <React.Fragment>
        {
          showExport ? <SaveModal ally={mainAlly} enemy={mainEnemy} close={this.showExport} importData={this.parseImport} /> : null
        }
        <div className="App">
          <div className="full-sidebar">
            <div className={`sidebar ${showSidebar === true ? "show-sidebar" : "hide-sidebar"}`}>
              <h2 className="sidebar-header">Saved List</h2>
              {
                savedList.map(saved => <SavedChampion title={saved[0]} name={saved[1]} champ={saved[2]} update={this.setChampion}/>)
              }
            </div>
          </div>
          <div className="app-background"></div>
          <h1 className="damage-calc-header">League of Legends Damage Calculator</h1>
          <header className="champion-select">
            <div className="allies">
              <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainAlly")} />
              <ChampionCard save={this.saveChampion} level={(type) => this.levelup(type, "mainAlly")} updateItem={(newItem, slot) => this.updateItem(newItem, slot, "mainAlly")} skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainAlly")} champion={mainAlly} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainAlly")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainAlly")} />
            </div>
            <div className="enemy">
              <CharacterSelect championlist={ChampionData} onChange={(champion) => this.updateChampion(champion, "mainEnemy")} makeTarget={true} targetDummy={this.targetDummy} />
              <ChampionCard updateDummy={this.updateDummy} save={this.saveChampion} level={(type) => this.levelup(type, "mainEnemy")} updateItem={(newItem, slot) => this.updateItem(newItem, slot, "mainEnemy")} skillUpdate={(skill, inc) => this.updateSkillLevel(skill, inc, "mainEnemy")} champion={mainEnemy} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainEnemy")} modifyBuff={(name, type) => this.modifyBuff(name, type, "mainEnemy")} />
            </div>
          </header>
          <CalculationArea dummy={this.state.mainEnemy.name === "target" ? true : false} ally={this.state.mainAlly} enemy={this.state.mainEnemy} update={true} />
          <div className="export-data" onClick={this.showExport} >
            EX
          </div>
          <div className="saved-data" onClick={this.showSidebar} >
            {
              showSidebar === true ? "⬅" : "➡"
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
