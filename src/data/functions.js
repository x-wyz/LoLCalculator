import {ChampionData} from './champion';
import {ItemsData} from './items';

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
    const clonedChampion = {};

    clonedChampion.runes = {};
    clonedChampion.buffs = {};
    clonedChampion.items = [{},{},{},{},{},{}];

    // clones all keys from champion to cloned champion there is an abilities array but it's only holding static objects
    for (let key in champion){
      clonedChampion[key] = champion[key]
    }

    for (let runepage in runes) {
      clonedChampion.runes[runepage] = {};
      for (let node in runes[runepage]) {
        // default values for all rune nodes - false
        clonedChampion.runes[runepage][node] = runes[runepage][node];
      }
    }

    for (let buff in buffs){
      // default values for all buffs - false
      clonedChampion.buffs[buff] = buffs[buff];
    }

    return clonedChampion;
  }
  else {
    return undefined;
  }
}

const duplicateBuffs = (buffs) => {
  let dupe = {};
  for (let buff in buffs){
    dupe[buff] = buffs[buff];
  }
  return dupe;
}

const duplicateRunes = (runes) => {
  let dupe = {};
  for (let page in runes){
    dupe[page] = {};
    for (let node in runes[page]){
      dupe[page][node] = runes[page][node];
    }
  }
  return dupe;
}

const duplicateChampion = (championData) => {
  const dupe = {};
  for (let key in championData) {
    if (typeof championData[key] === "string" || typeof championData[key] === "number" || typeof championData[key] === "boolean") {
      dupe[key] = championData[key]
    }
    else if (key === "abilities" || key === "itemEffects" || key === "items"){
      dupe[key] = championData[key]
    }
    else if (key === "runes") {
      dupe.runes = duplicateRunes(championData[key]);
    }
    else if (key === "buffs") {
      dupe.buffs = duplicateBuffs(championData[key]);
    }
  }
  return dupe;
}

const getBaseStats = (champ,lv, stat) => {
  const capitalizedstat = stat.charAt(0).toUpperCase() + stat.slice(1);
  return ChampionData[champ][stat] + (ChampionData[champ][`lv${capitalizedstat}`] * lv);
}

export const applyBuffs = (allyChampionData, enemyChampionData) => {
  const dupeAllyChampion = duplicateChampion(allyChampionData);
  const dupeEnemyChampion = duplicateChampion(enemyChampionData);
  const dupedChampionArray = [dupeAllyChampion, dupeEnemyChampion];

  for (let buff in dupeAllyChampion.buffs) {
    if (dupeAllyChampion.buffs[buff] === true){
      switch(buff){

      }
    }
  }

  // Apply buff from potions / baron
  dupedChampionArray.forEach(champ => {
    if (champ.name === "target") return;
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
          default: 
            break;
        }
      }
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

  dupedChampionArray.forEach((champ, idx) => {
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
    else if (champ.name === "jarvan"){
      if (champ.dragonstrike === true){
        let abilityLv = champ.ability1 - 1;
        let editingChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
        editingChamp.armor = abilityLv >= 0 ? editingChamp.armor * [.9,.86,.82,.78,.74][abilityLv] : editingChamp.armor;
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
          let editingChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
          editingChamp.armor *= multiplier;
          editingChamp.resist *= multiplier;
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
    else if (champ.name === "poppy"){
      if (champ.steadfast === true){
        champ.armor = champ.armor * 1.1;
        champ.resist = champ.resist * 1.1;
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
        champ.attack += champ.trophies >= 1 ? bonusAd * [1.01,1.04,1.09,1.16,1.25][champ.trophies - 1] : 0;
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
        let editingChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
        editingChamp.armor = abilityLv >= 0 ? editingChamp.armor * [0.75,0.7,0.65,0.6,0.55][abilityLv] : editingChamp.armor;
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
      let editingChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
      if (champ.chomp === true){
        let abilityLv = champ.ability1 - 1;
        
        if (abilityLv >= 0){
          let attakincrease = [20,25,30,35,40][abilityLv];
          champ.attack += attakincrease
          editingChamp.attack -= attakincrease / 2;
        }
      }

      if (champ.trollking === true){
        let abilityLv = champ.ability4 - 1;
        if (abilityLv >= 0){
          let armorLoss = editingChamp.armor * 0.4;
          let resistLoss = editingChamp.resist * 0.4;

          editingChamp.armor -= armorLoss;
          editingChamp.resist -= resistLoss;

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
        let editingChamp = idx === 0 ? dupedChampionArray[1] : dupedChampionArray[0];
        editingChamp.armor *= 0.8;
      }
    }
    else if (champ.name === "volibear"){
      if (champ.thunderbear === true){
        let abilityLv = champ.ability4 - 1;
        champ.hp += abilityLv >= 0 ? [200,400,600][abilityLv] : 0
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

  return dupedChampionArray;

}
