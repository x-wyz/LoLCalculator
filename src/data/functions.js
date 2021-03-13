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
    else if (key === "abilities"){
      // could also add the || to the previous if statement but it looks more clear to me as of writing this
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

export const applyBuffs = (championData) => {

}
