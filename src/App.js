import React, { Component } from 'react';
import './App.css';

import ChampionCard from './components/championcard/championcard';
import CalculationArea from './components/calculationarea/calculationarea';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
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
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ],
            icon: 'https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/3072.png'
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ],
            icon: 'https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/3072.png'
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ],
            icon: 'https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/3072.png'
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
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
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
          },
          {
            name: 'Bloodthirster',
            stats: [
              '50 ad',
              '200 hp',
              '400 mp'
            ]
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
        }
      }
    }

    this.modifyRune = this.modifyRune.bind(this);
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

  render(){
    const { mainAlly, mainEnemy } = this.state;
    console.log(mainAlly)
    return (
      <div className="App">
        <div className="app-background"></div>
        <header className="champion-select">
          <div className="allies">
            <ChampionCard champion={mainAlly} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainAlly")} />
          </div>
          <div className="enemy">
            <ChampionCard champion={mainEnemy} modifyRune={(type, rune) => this.modifyRune(type, rune, "mainEnemy")} />
          </div>
        </header>
        <CalculationArea ally={mainAlly} enemy={mainEnemy} />
      </div>
    );
  }
}

export default App;
