export let Runes = {
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

export let Buffs = {
    elixIron: false,
    elixWrath: false,
    elixSorc: false,
    baron: false,
    inf1: false,
    inf2: false,
    mount1: false,
    mount2: false
}

export let ChampionData = {
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
      }
}

