import {ChampionData} from './champion';
import {duplicate} from './general';

const runes = {
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

const buffs = {
    elixIron: false,
    elixWrath: false,
    elixSorc: false,
    baron: false,
    inf1: false,
    inf2: false,
    mount1: false,
    mount2: false
};

export const cloneChampion = (championName) => {
  if (ChampionData[championName] !== undefined){
    const champion = ChampionData[championName];
    const clonedChampion = duplicate(champion);

    clonedChampion.runes = duplicate(runes);
    clonedChampion.buffs = duplicate(buffs);
    clonedChampion.items = [{},{},{},{},{},{}];

    return clonedChampion;
  }
  else {
    return undefined;
  }
}

export const duplicateChampion = (championData) => {
  if (championData.name === "target") {return championData};
  const dupe = duplicate(championData);
  return dupe;
}

const getBaseStats = (champ,lv, stat) => {
  if (champ.name in ChampionData){
    const capitalizedstat = stat.charAt(0).toUpperCase() + stat.slice(1);
    return ChampionData[champ][stat] + (ChampionData[champ][`lv${capitalizedstat}`] * (lv-1));
  }
  
}

export const applyBuffs = (allyChampionData, enemyChampionData) => {
  const dupeAllyChampion = duplicateChampion(allyChampionData);
  const dupeEnemyChampion = duplicateChampion(enemyChampionData);
  const dupedChampionArray = [dupeAllyChampion, dupeEnemyChampion];

  // Apply buff from potions / baron
  dupedChampionArray.forEach(champ => {
    if (champ.name === "target") return;
    // set multipliers to be used before returning
    champ.adMultiplier = 1;
    champ.apMultiplier = 1;
    champ.armorMultiplier = 1;
    champ.resistMultiplier = 1;
    for (let buff in champ.buffs) {
      if (champ.buffs[buff] === true){
        switch(buff){
          case "elixIron":
            champ.hp += 300;
            break;
          case "elixSorc":
            champ.ap += 50;
            break;
          case "elixWrath":
            champ.attack += 30;
            break;
          case "baron":
            champ.attack += 19;
            champ.ap += 32;
            break;
          case "inf1":
            champ.adMultiplier += 0.04;
            champ.apMultiplier += 0.04;
            break;
          case "inf2":
            champ.adMultiplier += 0.08;
            champ.apMultiplier += 0.08;
            break;
          case "mount1":
            champ.armorMultiplier += 0.06;
            champ.resistMultiplier += 0.06;
            break;
          case "mount2":
            champ.armorMultiplier += 0.12;
            champ.resistMultiplier += 0.12;
            break;
          default: 
            break;
        }
      }
    }
  })

  dupedChampionArray.forEach((champ, idx) => {
    if (champ.name === "target") return;
    let adaptive = (champ.attack - getBaseStats(champ.name, champ.lv, "attack")) < champ.ap ? "ap" : "attack";

    switch(true){
      case (typeof champ.runes.domination.node4 === "number"):
        // First 3 are basically the same rune actual game wont allow this calc does though.
        champ.runes.domination.node4 = champ.runes.domination.node4 > 10 ? 10 : champ.runes.domination.node4 < 0 ? 0 : champ.runes.domination.node4;
        champ[adaptive] += adaptive === "attack" ? 1.2 * champ.runes.domination.node4 : 2 * champ.runes.domination.node4;
        champ[adaptive] += adaptive === "attack" && champ.runes.domination.node4 >= 10 ? 6 : adaptive === "ap" && champ.runes.domination.node4 >= 10 ? 10 : 0;
        /* falls through */
      case (typeof champ.runes.domination.node5 === "number"):
      champ.runes.domination.node5 = champ.runes.domination.node5 > 10 ? 10 : champ.runes.domination.node5 < 0 ? 0 : champ.runes.domination.node5;
        champ[adaptive] += adaptive === "attack" ? 1.2 * champ.runes.domination.node5 : 2 * champ.runes.domination.node5;
        champ[adaptive] += adaptive === "attack" && champ.runes.domination.node5 >= 10 ? 6 : adaptive === "ap" && champ.runes.domination.node5 >= 10 ? 10 : 0;
        /* falls through */
      case (typeof champ.runes.domination.node6 === "number"):
        champ.runes.domination.node6 = champ.runes.domination.node6 > 10 ? 10 : champ.runes.domination.node6 < 0 ? 0 : champ.runes.domination.node6;
        champ[adaptive] += adaptive === "attack" ? 1.2 * champ.runes.domination.node6 : 2 * champ.runes.domination.node6;
        champ[adaptive] += adaptive === "attack" && champ.runes.domination.node6 >= 10 ? 6 : adaptive === "ap" && champ.runes.domination.node6 >= 10 ? 10 : 0;
        /* falls through */
      case (champ.runes.sorcery.node4 === true):
        champ.abilityHaste += champ.lv >= 5 ? 5 : 0
        champ.abilityHaste += champ.lv >= 8 ? 5 : 0
        /* falls through */
      case (typeof champ.runes.sorcery.node9 === "number"):
        champ.runes.sorcery.node9 = champ.runes.sorcery.node9 > 6 ? 6 : champ.runes.sorcery.node9 < 0 ? 0 : champ.runes.sorcery.node9;
        champ[adaptive] += adaptive === "attack" ? 4.8 * champ.runes.sorcery.node9 *  (champ.runes.sorcery.node9-1) / 2 : 8 * champ.runes.sorcery.node9 *  (champ.runes.sorcery.node9-1) / 2;
        /* falls through */
      case (champ.runes.resolve.node4 === true):
        champ.armor += 9;
        champ.resist += 9;
        champ.armorMultiplier += 0.05;
        champ.resistMultiplier += 0.05;
        /* falls through */
      case (typeof champ.runes.resolve.node7 === "number"):
        champ.hp += (champ.runes.resolve.node7 / 8) * 3
        break;
      default:
        break
    }
  })

  // initialize item effects array for next foreach loop
  dupedChampionArray[0].itemEffects = [];
  dupedChampionArray[1].itemEffects = [];

  dupedChampionArray.forEach((champ, idx) => {
    if (champ.name === "target") return;
    champ.items.forEach(item => {
      if (item.attack !== undefined) {
        if (item.attack.type === "buff" && champ.itemEffects.filter(x => x.name === item.attack.name && x.type === "buff").length === 0) {
          champ.itemEffects.push({...item.attack})
        }
      }

      if (item.debuff !== undefined && idx === 0){
        if (item.debuff.type === "debuff" && dupedChampionArray[1].itemEffects.filter(x => x.name === item.debuff.name && x.type === "debuff").length === 0)  {
          dupedChampionArray[1].itemEffects.push({...item.debuff})
        }
      }
      else if (item.debuff !== undefined && idx === 1) {
        if (item.debuff.type === "debuff" && dupedChampionArray[0].itemEffects.filter(x => x.name === item.debuff.name && x.type === "debuff").length === 0)  {
          dupedChampionArray[0].itemEffects.push({...item.debuff})
        }
      }
      

      if (item.buff !== undefined) {
        if (item.buff.type === "buff" && champ.itemEffects.filter(x => x.name === item.buff.name && x.type === "buff").length === 0) {
          champ.itemEffects.push({...item.buff})
        }
      }
    })
  })

  // Champion specific buffs
  dupedChampionArray.forEach((champ, idx) => {
    champ.onAttack = [];
    let enemyChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
    if (champ.name === "aatrox"){
      if (champ.worldEnder === true){
        let abilityLv = champ.ability4 - 1;
        champ.attack = abilityLv >= 0 ? champ.attack * [1.2,1.3,1.4][abilityLv] : champ.attack;
      }
    }
    else if (champ.name === "alistar"){
      if (champ.unbreakableWill === true){
        let abilityLv = champ.ability4 - 1;
        champ.dmgReductionPercentage = abilityLv >= 0 ? [55,65,75][abilityLv] : champ.dmgReductionPercentage;
      }
    }
    else if (champ.name === "amumu"){
      if (champ.tantrum){
        let abilityLv = champ.ability3 - 1;
        let armorScale = (champ.armor - getBaseStats("amumu", champ.lv, "armor")) * 0.03;
        let resistScale = (champ.armor - getBaseStats("amumu", champ.lv, "resist")) * 0.03;
        champ.physReductionFlat = abilityLv >= 0 ? [2,4,6,8,10][abilityLv] + resistScale + armorScale : champ.physReductionFlat;
      }
    }
    else if (champ.name === "braum"){
      if (champ.standBehindMe === true){
        let abilityLv = champ.ability2 - 1;
        let baseArmor = getBaseStats("braum", champ.lv, "armor");
        let baseResist = getBaseStats("braum", champ.lv, "resist");
        champ.armor = abilityLv >= 0 ? champ.armor + ([10,14,18,22,26][abilityLv] + ((champ.armor - baseArmor) * .36)) : champ.armor;
        champ.resist = abilityLv >= 0 ? champ.resist + ([10,14,18,22,26][abilityLv] + ((champ.resist - baseResist) * .36)) : champ.resist;
      }

      if (champ.unbreakable === true){
        let abilityLv = champ.ability3 - 1;
        champ.dmgReductionPercentage = abilityLv >= 0 ? [30,32.5,35,37.5,40][abilityLv] : champ.dmgReductionPercentage;
      }
    }
    else if (champ.name === "darius"){
      if (champ.apprehend === true) {
        let abilityLv = champ.ability3 - 1;
        champ.arpen = abilityLv >= 0 ? [15,20,25,30,35][abilityLv] + champ.arpen : champ.arpen;
      }
    }
    else if (champ.name === "drmundo"){
      if (champ.masochism === true){
        let abilityLv = champ.ability3 - 1;
        champ.attack += abilityLv >= 0 ? [40,55,70,85,100][abilityLv] : 0
      }
    }
    else if (champ.name === "evelynn"){
      if (champ.allure === true){
        let abilityLv = champ.ability2 - 1;
        enemyChamp.resist *= abilityLv >= 0 ? [.75,.725,.7,.675,.65][abilityLv] : 1;
      }
    }
    else if (champ.name === "fizz"){
      if (champ.nimble === true){
        champ.dmgReductionFlat = 4 + (champ.ap * 0.01)
      }
    }
    else if (champ.name === "galio"){
      if (champ.durand === true){
        let abilityLv = champ.ability2 - 1;
        let apScale = champ.ap * 0.05;
        let resistScale = (champ.resist - getBaseStats("galio", champ.lv, "resist")) * 0.08;
        champ.magicReductPercentage = abilityLv >= 0 ? [20,25,30,35,40][champ.abilityLv] + apScale + resistScale : champ.magicReductPercentage;
        champ.physReductPercentage = champ.magicReductPercentage / 2;
      }
    }
    else if (champ.name === "garen"){
      if (champ.courage !== false && typeof champ.courage === "number"){
        champ.armor = champ.armor + (0.25 * champ.courage) * (champ.courage === 120 ? 1.1 : 1);
        champ.resist = champ.resist + (0.25 * champ.courage) * (champ.courage === 120 ? 1.1 : 1);
      }
    }
    else if (champ.name === "gragas"){
      if (champ.drunk === true){
        let abilityLv = champ.ability2 - 1;
        let apScale = champ.ap * 0.04;
        champ.dmgReductionPercentage = abilityLv >= 0 ? [10,12,14,16,18][abilityLv] + apScale : champ.dmgReductionPercentage;
      }
    }
    else if (champ.name === "graves"){
      if (champ.trueGrit !== false && typeof champ.trueGrit === "number"){
        let abilityLv = champ.ability3 - 1;
        let perStack = [6,9,12,15,18][abilityLv];
        champ.armor += abilityLv >= 0 ? perStack * champ.trueGrit : champ.armor;
      }
    }
    else if (champ.name === "jarvan"){
      if (champ.dragonstrike === true){
        let abilityLv = champ.ability1 - 1;

        enemyChamp.armor *= abilityLv >= 0 ? [.9,.86,.82,.78,.74][abilityLv] : 1;
      }
    }
    else if (champ.name === "kassadin"){
      if (champ.spellshield === true){
        champ.magicReductPercentage = 15;
      }
    }
    else if (champ.name === "leona"){
      if (champ.sunshield === true){
        let abilityLv = champ.ability2 - 1;
        if (abilityLv >= 0){
          let armorScale = (champ.armor - getBaseStats("leona", champ.lv, "armor")) * .2;
          let resistScale = (champ.resist - getBaseStats("leona", champ.lv, "resist")) * .2;
          let lvScale = [20,25,30,35,40][abilityLv];
          champ.resist += lvScale + resistScale;
          champ.armor += lvScale + armorScale;
        }
      }
    }
    else if (champ.name === "jayce"){
      if (champ.meleeForm === true ){
        let bonusResists = [5,15,25,35][0 + Math.floor((champ.lv - 1) / 5)]
        champ.armor = champ.armor + bonusResists;
        champ.resist = champ.resist + bonusResists;
      }
    }
    else if (champ.name === "jax"){
      if (champ.grandmaster === true){
        let abilityLv = champ.ability4 - 1;

        if (abilityLv >= 0){
          let bonusAdScale = champ.attack - getBaseStats("jax", champ.lv, "attack");
          let apScale = champ.ap * 0.2;
          let adScale = bonusAdScale * 0.5;
          let bonusResists = [30,50,70][abilityLv];
          champ.armor +=  bonusResists + adScale;
          champ.resist +=  bonusResists + apScale;
        }
      }
    }
    else if (champ.name === "kogmaw"){
      if (champ.spittle === true){
        let abilityLv = champ.ability1 - 1;
        if (abilityLv >= 0){
          let multiplier = [.8,.78,.76,.74,.72][abilityLv];
  
          enemyChamp.armor *= multiplier;
          enemyChamp.resist *= multiplier;
        }
      }
    }
    else if (champ.name === "malphite"){
      if (champ.solidrock === true && champ.graniteshield === true){
        let abilityLv = champ.ability2 - 1;
        champ.armor = abilityLv >= 0 ? champ.armor * [1.3,1.45,1.6,1.75,1.9][abilityLv] : champ.armor
      }
      else if (champ.solidrock === true){
        let abilityLv = champ.ability2 - 1;
        champ.armor = abilityLv >= 0 ? champ.armor * [1.1,1.15,1.2,1.25,1.3][abilityLv] : champ.armor
      }
    }
    else if (champ.name === "mordekaiser"){
      if (champ.deathgrasp){
        let abilityLv = champ.ability3 - 1;
        champ.mpen += abilityLv >= 0 ? [5,7.5,10,12.5,15][abilityLv] : 0;
      }

      if (champ.deathrealm === true){
        let lostAd = 0.1 * enemyChamp.attack;
        let lostAp = 0.1 * enemyChamp.ap;
        let lostArmor = 0.1 * enemyChamp.armor;
        let lostResist = 0.1 * enemyChamp.resist;

        enemyChamp.armor -= lostArmor;
        enemyChamp.resist -= lostResist;
        enemyChamp.ap -= lostAp;
        enemyChamp.attack -= lostAd;

        champ.armor += lostArmor;
        champ.resist += lostResist;
        champ.ap += lostAp;
        champ.attack += lostAd;
      }
    }
    else if (champ.name === "nocturne") {
      if (champ.dusktrail === true){
        let abilityLv = champ.ability1 - 1;
        champ.attack = abilityLv >= 0 ? champ.attack + [20,30,40,50,60][abilityLv] : champ.attack;
      }
    }
    else if (champ.name === "orianna"){
      if (champ.protect === true){
        let abilityLv = champ.ability3 - 1;
      
        if (abilityLv >= 0){
          let bonusResists = [10,15,20,25,30][abilityLv];
          champ.armor += bonusResists;
          champ.resist += bonusResists;
        }
      }
    }
    else if (champ.name === "olaf"){
      if (champ.berserker === true){
        let abilityLv = champ.ability4 - 1;
        champ.attack += abilityLv >= 0 ? [15,20,25][abilityLv] + (champ.attack * 0.3) : 0
      }
    }
    else if (champ.name === "poppy"){
      if (champ.steadfast === true){
        champ.armor *= 1.1;
        champ.resist *= 1.1;
      }
    }
    else if (champ.name === "pyke"){
      if (champ.drowned === true){
        let bonusHp = champ.hp - getBaseStats("pyke", champ.lv, "hp");
        champ.hp = getBaseStats("pyke", champ.lv, "hp");
        champ.attack = champ.attack + Math.floor(bonusHp / 14);
      }
    }
    else if (champ.name === "riven"){
      if (champ.reforge === true){
        champ.attack = champ.attack * 1.2;
      }
    }
    else if (champ.name === "rengar"){
      if (champ.trophies !== false && typeof champ.trophies === "number"){
        let bonusAd = champ.attack - getBaseStats("rengar", champ.lv, "attack");
        champ.attack += champ.trophies >= 1 ? bonusAd * [1,1.01,1.04,1.09,1.16,1.25][champ.trophies] : 0;
      }
    }
    else if (champ.name === "renekton"){
      if (champ.ascended === true){
        let abilityLv = champ.ability4 - 1;
        champ.hp = abilityLv >= 0 ? champ.hp + [250,500,750][abilityLv] : champ.hp;
      }
    }
    else if (champ.name === "nasus"){
      if (champ.spiritfire === true){
        let abilityLv = champ.ability3 - 1;

        enemyChamp.armor = abilityLv >= 0 ? enemyChamp.armor * [0.75,0.7,0.65,0.6,0.55][abilityLv] : enemyChamp.armor;
      }

      if (champ.godmode === true){
        let abilityLv = champ.ability4 - 1;

        if (abilityLv >= 0){
          let bonusResists = [40,55,70][abilityLv];
          champ.armor += bonusResists;
          champ.resist += bonusResists;
          champ.hp += [300,450,600][abilityLv];
        }
        
      }
    }
    else if (champ.name === "rammus"){
      if (champ.defensecurl === true){
        let abilityLv = champ.ability2 - 1;
        
        if (abilityLv >= 0){
          let armorScale = champ.armor * [.6,.7,.8,.9,1][abilityLv];
          let resistScale = champ.resist * [.3,.35,.4,.45,.5][abilityLv];
          champ.armor += 30 + armorScale;
          champ.resist += 10 + resistScale;
        }
      }
    }
    else if (champ.name === "ryze"){
      if (champ.arcane === true){
        let bonusMana = champ.mana - getBaseStats("ryze", champ.lv, "mana");
        let bonusAp = bonusMana * 0.05;
        champ.ap += bonusAp
      }
    }
    else if (champ.name === "sejuani"){
      if (champ.frostarmor === true){
        let armorScale = (champ.armor - getBaseStats("sejuani", champ.lv, "armor")) * 0.5;
        let resistScale = (champ.resist - getBaseStats("sejuani", champ.lv, "resist")) * 0.5;
        champ.armor += 10 + armorScale;
        champ.resist += 10 + resistScale;
      }
    }
    else if (champ.name === "senna"){
      if (champ.absolation !== false && typeof champ.absolation === "number"){
        champ.critDamage = champ.critDamage * 0.86;
        champ.attack += champ.absolation * 0.75;
        champ.critChance += Math.floor(champ.absolation / 20) * 10;
      }
    }
    else if (champ.name === "shyvanna"){
      if (champ.dragon !== false && typeof champ.dragon === "number"){
        champ.armor += 5 + (5 * champ.dragon);
        champ.resist += 5 + (5 * champ.dragon);

      }

      if (champ.dragondescent === true){
        let abilityLv = champ.ability4 - 1;
        champ.hp = abilityLv >= 0 ? champ.hp + [150,250,350][abilityLv] : champ.hp;
      }
    }
    else if (champ.name === "singed"){
      if (champ.insanity === true){
        let abilityLv = champ.ability4 - 1;
        if (abilityLv >= 0){
          let bonusStats = [30,60,90][abilityLv];
          champ.ap += bonusStats;
          champ.armor += bonusStats;
          champ.resist += bonusStats;
        }
      }
    }
    else if (champ.name === "sion"){
      if (champ.healthboost !== false && typeof champ.healthboost === "number"){
        champ.hp += champ.healthboost;
      }
    }
    else if (champ.name === "swain"){
      if (champ.demonic === true){
        let abilityLv = champ.ability4 - 1;
        champ.hp += abilityLv >= 0 ? [125,200,275][abilityLv] : 0
      }
    }
    else if (champ.name === "taric"){
      if (champ.tether === true){
        let abilityLv = champ.ability2 - 1;
        champ.armor *= abilityLv >= 0 ? [1.1,1.11,1.12,1.13,1.14][abilityLv] : 1
      }
    }
    else if (champ.name === "thresh"){
      if (champ.souls !== false && typeof champ.souls === "number"){
        champ.armor += champ.souls * 0.75;
        champ.ap += champ.souls * 0.75;
      }
    }
    else if (champ.name === "trundle"){
      if (champ.chomp === true){
        let abilityLv = champ.ability1 - 1;
        
        if (abilityLv >= 0){
          let attakincrease = [20,25,30,35,40][abilityLv];
          champ.attack += attakincrease
          enemyChamp.attack -= attakincrease / 2;
        }
      }

      if (champ.trollking === true){
        let abilityLv = champ.ability4 - 1;
        if (abilityLv >= 0){
          let armorLoss = enemyChamp.armor * 0.4;
          let resistLoss = enemyChamp.resist * 0.4;

          enemyChamp.armor -= armorLoss;
          enemyChamp.resist -= resistLoss;

          champ.armor += armorLoss;
          champ.resist += resistLoss;
        }
      }
    }
    else if (champ.name === "tryndamere"){
      if (champ.rage !== false &&  typeof champ.rage === "number"){
        champ.critChance += Math.floor(champ.rage / 10) * 4;
      }
    }
    else if (champ.name === "vayne"){
      if (champ.finalhour === true){
        let abilityLv = champ.ability4 - 1;
        champ.ad += abilityLv >= 0 ? [35,50,65][abilityLv] : 0
      }
    }
    else if (champ.name === "veigar"){
      if (champ.evil !== false && typeof champ.evil === "number"){
        champ.ap += champ.evil;
      }
    }
    else if (champ.name === "vi"){
      if (champ.dented === true){
        enemyChamp.armor *= 0.8;
      }
    }
    else if (champ.name === "volibear"){
      if (champ.thunderbear === true){
        let abilityLv = champ.ability4 - 1;
        champ.hp += abilityLv >= 0 ? [200,400,600][abilityLv] : 0
      }
    }
    else if (champ.name === "wukong"){
      if (champ.stone !== false && typeof champ.stone === "number"){
        let bonusArmor = 5 + (4 / 17 * (champ.lv - 1));
        champ.armor += bonusArmor * (champ.stone + 1)
      }

      if (champ.crushing === true){
        let abilityLv = champ.ability1 - 1;
        enemyChamp.armor *= abilityLv >= 0 ? [.9,.85,.8,.75,.7][abilityLv] : 1
      }
    }
    else if (champ.name === "yasuo"){
      if (champ.wanderer === true){
        champ.critChance *= 2.5;
        champ.critDamage *= 0.9;
        let bonusAd = champ.critChance > 100 ? (champ.critChance - 100) * 0.4 : 0;
        champ.attack += bonusAd;
      }
    }
    else if (champ.name === "yone"){
      if (champ.hunter === true){
        champ.critChance *= 2.5;
        champ.critDamage *= 0.9;
        let bonusAd = champ.critChance > 100 ? (champ.critChance - 100) * 0.4 : 0;
        champ.attack += bonusAd;
      }
    }
  })

  // on attack items
  dupedChampionArray.forEach((champ, idx) => {
    let enemy = idx === 0 ? 1 : 0
    champ.itemEffects.forEach(effect => {
      switch(effect.name){
        case "ruinedking":
          champ.onAttack.push(["BOTRK", `${champ.range === "melee" ? "melee" : "ranged"}`, "blade of the ruined king"]);
          break;
        case "fray":
          champ.onAttack.push(["WITS", (15 + 65 / 17 * (champ.lv - 1)), "magical", "wit's end"])
          break;
        case "nashors":
          // will push later to ensure ap from deathcap is calculated
          champ.hasNashors = true;
          break;
        case "recurve":
          champ.onAttack.push(["RECURVE", 15,"physical", "recurve bow"])
          break;
        case "titanic":
          champ.onAttack.push(["TITANIC", 5 + (champ.hp * 0.015), "physical", "titanic hydra"])
          break;
        case "wrath":
          champ.onAttack.push(["RAGEKNIFE", (champ.critChance >= 100 ? 175 : champ.critChance * 1.75), "physical", "rageknife"])
          champ.critChance = 0;
          break;
        case "wrath2":
          champ.onAttack.push(["RAGEBLADE", (champ.critChance >= 100 ? 200 : champ.critChance * 2), "physical", "rageblade"])
          champ.critChance = 0;
          break;
        case "deathcap":
          champ.apMultiplier += 0.35;
          break;
        case "infinity":
          champ.infinity = champ.critChance >= 60;
          break;
        case "rocksolid":
          champ.onAttack.push(["ROCKSOLID", (5 * (dupedChampionArray[enemy].hp / 1000)).toFixed(0), "true", "rocksolid"]);
          break;
        default:
          break;
      }
    })
  })

  // champ final stats
  dupedChampionArray.forEach((champ) => {
    champ.attack *= champ.adMultiplier;
    champ.ap *= champ.apMultiplier;
    champ.armor *= champ.armorMultiplier;
    champ.resist *= champ.resistMultiplier;
    if ((champ.wanderer === true || champ.hunter === true) && champ.infinity){
      champ.critDamage += (35 * 0.9);
    }
    else if (champ.infinity){
      champ.critDamage += 35;
    }

    if (champ.hasNashors){
      champ.onAttack.push(["NASHOR", (15 + (champ.ap * 0.2)), "magical", "nashor's tooth"])
    }

    let abilityScale = 0;
    let apScale = 0;
    let bonusAd = 0;
    let adScale = 0;

    // champion specific on attack
    switch(true){
      case ((champ.name === "masteryi") && (champ.wuju === true) && (champ.ability3 > 0)):
        abilityScale = [30,40,50,60,70][champ.ability3 - 1];
        bonusAd = champ.attack - getBaseStats("masteryi", champ.lv, "attack");
        champ.onAttack.push(["WUJU", (abilityScale + bonusAd * 0.35),"true", "wuju style"]);
        break;
      case ((champ.name === "teemo") && (champ.poison === true) && (champ.ability3 > 0)):
        abilityScale = [10,20,30,40,50][champ.ability3 - 1];
        apScale = champ.ap * 0.3;
        champ.onAttack.push(["POISON", (abilityScale + apScale),"magical", "poison dart"]);
        break;
      case ((champ.name === "varus") && (champ.blighted === true) && (champ.ability2 > 0)):
        abilityScale = [7,8,9,10,11][champ.ability3 - 1];
        apScale = champ.ap * 0.25;
        champ.onAttack.push(["BLIGHT", (abilityScale + apScale),"magical", "blighted arrow"]);
        break;
      case ((champ.name === "warwick") && (champ.hungry === true)):
        abilityScale = 10 + (2 * champ.lv);
        adScale = (champ.attack - getBaseStats("masteryi", champ.lv, "attack")) * 0.15;
        apScale = champ.ap * 0.1;
        champ.onAttack.push(["WARWICK", (abilityScale + apScale + adScale),"magical", "warwick passive"]);
        break;
      case ((champ.name === "irelia") && (champ.ionianFervor === true)):
        abilityScale = 12 + (3 * champ.lv);
        adScale = (champ.attack - getBaseStats("masteryi", champ.lv, "attack"))*0.25;
        champ.onAttack.push(["FERVOR", (abilityScale + adScale),"magical", "ionian fervor"]);
        break;
      case ((champ.name === "orianna") && (champ.cog === true)):
        abilityScale = 10 + (8 * (Math.floor(champ.lv / 3)));
        apScale = champ.ap * 0.15;
        champ.onAttack.push(["COGWORK", (abilityScale + apScale),"magical", "cogs"]);
        break;
      default:
        break;
    }
  })

  return dupedChampionArray;
}

const calculateDamage = (totalDamage, damageType, ally, enemy) => {
  // is probably more efficient to implement this directly into the functions that need it but until the app is too slow will leave this here.
  // as some functions will need to call this multiple times so recalculating the enemy res etc... would be kind of wasted
  // a solution could be to have this calculate all the resistences and just return an object holding those values but theres almost no
  // difference between that and just implementing directly using the enemy object. it would be cleaner though

  // the only function that currently calls this multiple times is the calculatebasic function.
  let damage = totalDamage;
  if (typeof enemy.dmgReductionFlat === "number"){
    // fizz is currently the only champion able to obtain this stat
    damage -= enemy.dmgReductionFlat;
  }

  if (damageType === "physical"){
    const eArmor = enemy.armor * (1 - (ally.arpen / 100)) - (ally.lethality * (0.6 + 0.4 * ally.lv / 18));
    let enemyArmorMultiplier = 100/(100+eArmor);
    damage *= enemyArmorMultiplier;
    if (typeof enemy.dmgReductionPercentage === "number"){
      damage = damage * ((100 - enemy.dmgReductionPercentage) / 100)
    }

    if (typeof enemy.physReductPercentage === "number"){
      damage = damage * ((100 - enemy.physReductPercentage) / 100)
    }

    if (typeof enemy.physReductionFlat === "number"){
      // so far the only character with this stat is amumu and his is calculated post mitigation which is why this is here.
      damage -= enemy.physReductionFlat;
    }

    return damage;
  }
  else if (damageType === "magical"){
    const eResist = enemy.resist * (1 - (ally.mpen / 100)) - ally.flatMPen;
    let enemyResistMultiplier = 100/(100+eResist);
    damage *= enemyResistMultiplier;
    if (typeof enemy.dmgReductionPercentage === "number"){
      damage = damage * ((100 - enemy.dmgReductionPercentage) / 100)
    }

    if (typeof enemy.magicReductPercentage === "number"){
      damage = damage * ((100 - enemy.magicReductPercentage) / 100)
    }

    return damage;
  }
  else if (damageType === "true"){
    return totalDamage;
  }
  else {
    return 0
  }
}

const calculateOnAttack = (ally, enemy) => {
  let totalDamage = 0;
  let blade = false;
  if (ally.onAttack !== undefined && Array.isArray(ally.onAttack)){
    ally.onAttack.forEach(attack => {
      switch (attack[0]) {
        case "ROCKSOLID":
          totalDamage -= attack[1];
          break;
        case "BOTRK":
          blade = true;
          break;
        default:
          totalDamage += calculateDamage(attack[1], attack[2], ally, enemy);
          break;
      }
    })
  }
  return [totalDamage, blade];
}

export const calculateBasic = (ally, enemy) => {
  const damageValues = {
    basic: 0,
    normal: 0,
    normalPercentage: 0,
    normalCount: 0,
    crit: 0,
    critPercentage: 0,
    critCount: 0,
    average: 0,
    averagePercentage: 0,
    averageCount: 0,
    armorMultiplier: 0,
    resistMultiplier: 0,
    items: []
  }

  enemy.armor = enemy.armor ? enemy.armor : 0;
  enemy.resist = enemy.resist ? enemy.resist : 0;

  const eArmor = enemy.armor * (1 - (ally.arpen / 100)) - (ally.lethality * (0.6 + 0.4 * ally.lv / 18));
  damageValues.armorMultiplier = 100/(100+eArmor);

  const eResist = enemy.resist * (1 - (ally.mpen / 100)) - ally.flatMPen;
  damageValues.resistMultiplier = 100/(100+eResist);

  let [totalOnAttackDamage, ruinedking] = calculateOnAttack(ally, enemy);
  ruinedking = ruinedking === false ? 0 : ally.range === "melee" ? 0.1 : 0.06;

  damageValues.basic = ally.attack;
  damageValues.normal = calculateDamage(ally.attack, "physical", ally, enemy) + totalOnAttackDamage;
  damageValues.crit = calculateDamage(ally.attack * (ally.critDamage / 100), "physical", ally, enemy) + totalOnAttackDamage;
  
  if (ally.critChance === 0){
    damageValues.average = damageValues.normal;
  }
  else if (ally.critChance === 100){
    damageValues.average = damageValues.crit;
  }
  else {
    let averageDamage = parseInt(damageValues.basic) + ((damageValues.crit - damageValues.normal)/100) * ally.critChance;
    damageValues.average = calculateDamage(averageDamage, "physical", ally, enemy) + totalOnAttackDamage;
  }


  damageValues.normalPercentage = (damageValues.normal / enemy.hp) * 100
  damageValues.critPercentage = (damageValues.crit / enemy.hp) * 100
  damageValues.averagePercentage = (damageValues.average / enemy.hp) * 100

  for (let x = enemy.hp; x > 0;){
    damageValues.normalCount += 1;
    let ruinedkingdamage = ruinedking !== 0 ? calculateDamage(x * ruinedking, "physical", ally, enemy) : 0;
    x -= damageValues.normal + ruinedkingdamage;
  }

  for (let y = enemy.hp; y > 0;){
    damageValues.critCount += 1;
    let ruinedkingdamage = y * ruinedking;
    y -= damageValues.crit + ruinedkingdamage;
  }

  for (let z = enemy.hp; z > 0;){
    damageValues.averageCount += 1;
    let ruinedkingdamage = z * ruinedking;
    z -= damageValues.average + ruinedkingdamage;
  }

  damageValues.items = ally.onAttack;

  return damageValues;
}

export const calculateSkill = (ally, enemy, skill, skillLv) => {
  let bonusAd = ally.attack - ally.baseAttack - (ally.lvAttack * (ally.lv - 1))
  let ap = ally.ap;

  // Return object, contains all values
  const skillValues = {
    damageType: skill.damage,
    note: skill.note,
    damageValues: {},
    type: skill.type,
    cooldown: 0
  };

  switch(skill.damage){
    case "physical":
      skillValues.multiplier = 100/(100+(enemy.armor * (1 - (ally.arpen / 100)) - (ally.lethality * (0.6 + 0.4 * ally.lv / 18))));
      break;
    case "magical":
      skillValues.multiplier = 100/(100+(enemy.resist * (1 - (ally.mpen / 100)) - ally.flatMPen));
      break;
    case "true":
      skillValues.multiplier = 1;
      break;
    default:
      skillValues.multiplier = 0;
      break;
  }

  skillValues["damageValues"]["level"] = skill.lvScale !== undefined ? skill.lvScale[0] + ((skill.lvScale[1] - skill.lvScale[0]) / 17) * (ally.lv - 1) : 0;
  skillValues["damageValues"]["ap"] = (skill.ap !== 0 && skill.ap !== undefined) ? (Array.isArray(skill.ap) ? ap * (skill.ap[skillLv] / 100) : ap * (skill.ap / 100)) : 0;
  skillValues["damageValues"]["ad"] = (skill.ad !== 0 && skill.ad !== undefined) ? (Array.isArray(skill.ad) ? ally.attack * (skill.ad[skillLv] / 100) : ally.attack * (skill.ad / 100)) : 0;
  skillValues["damageValues"]["bonus ad"] = (skill.bAd !== 0 && skill.bAd !== undefined) ? (Array.isArray(skill.bAd) ? bonusAd * (skill.bAd[skillLv] / 100) : bonusAd * (skill.bAd / 100)) : 0;
  skillValues["damageValues"]["max hp"] = (skill.mhp !== 0 && skill.mhp !== undefined) ? (Array.isArray(skill.mhp) ? ally.hp * (skill.mhp[skillLv] / 100) : ally.hp * (skill.mhp / 100)) : 0;
  skillValues["damageValues"]["enemy max hp"] = (skill.emhp !== 0 && skill.emhp !== undefined) ? (Array.isArray(skill.emhp) ? enemy.hp * (skill.emhp[skillLv] / 100) : enemy.hp * (skill.emhp / 100)) : 0;
  
  if (skill.emhpScale !== 0 && skill.emhpScale !== undefined){
    if (skill.emhpScale[2] === "ap") {
      const times = ap / skill.emhpScale[1];
      const multiplier = skill.emhpScale[0] * times;
      skillValues["damageValues"]["enemy max hp"] += enemy.hp * (multiplier / 100);
    }
    else if (skill.emhpScale[2] === "bAd") {
      const times = bonusAd / skill.emhpScale[1];
      const multiplier = skill.emhpScale[0] * times;
      skillValues["damageValues"]["enemy max hp"] += enemy.hp * (multiplier / 100);
    }
  }

  if (skill.cd !== undefined) {
    if (skill.cd[0].length === 5 || skill.cd[0].length === 3){
      skillValues["cooldown"] = skill.cd[0][skillLv];
    }
    else if (skill.cd[0].length === 1) {
      skillValues["cooldown"] = skill.cd[0][0];
    }
    else if (skill.cd[0].length === 2) {
      skillValues["cooldown"] = skill.cd[0][0];
    }

    if (skill.cd[2] === undefined || skill.cd[2] !== "static"){
      skillValues["cooldown"] = skillValues["cooldown"] * (100/(100+ally.abilityHaste))
    }
  }
  
  if (skill.base !== undefined) {
    skillValues["damageValues"]["base"] = (skill.type === "damage" || skill.type === "shield" || skill.type === "heal") && typeof skill.base[skillLv] === "number" ? skill.base[skillLv] : 0;
  }
  else {
    skillValues["damageValues"]["base"] = 0;
  }


  let totalDamage = skillValues["damageValues"]["base"] + skillValues["damageValues"]["level"] + skillValues["damageValues"]["ap"] + skillValues["damageValues"]["ad"] + skillValues["damageValues"]["bonus ad"] + skillValues["damageValues"]["max hp"] + skillValues["damageValues"]["enemy max hp"];

  skillValues["totalDamage"] = totalDamage;
  
  if (skill.type === "damage" || skill.damage !== undefined){
    skillValues["finalDamage"] = calculateDamage(totalDamage, skill.damage, ally, enemy);
    skillValues["percentage"] = skillValues["finalDamage"] / enemy.hp * 100;
  }
  else if (skill.type === "heal" || skill.type === "shield"){
    skillValues["finalDamage"] = totalDamage;
    skillValues["percentage"] = skillValues["finalDamage"] / ally.hp * 100;
  }
  else {
    skillValues["finalDamage"] = 0;
    skillValues["percentage"] = 0;
  }

  return skillValues;
}
