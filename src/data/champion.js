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
	aatrox: {
        name: 'aatrox',
        lv: 1,
        baseHp: 580,
        hp: 580,
        lvHp: 90,
        armor: 38,
        lvArmor: 3.25,
        resist: 32,
        lvResist: 1.25,
        movement: 345,
        mana: 0,
        lvMana: 0,
        attack: 60,
        baseAttack: 60,
        lvAttack: 5,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [56.25,168.75,281.25,393.75,506.25],
            type: "damage",
            damage: "physical",
            ad: [337.5, 365.625, 393.75, 421.875, 450],
            ap: 0,
            bAd: 0,
            rname: 'AatroxQ',
            note: "All 3 hits."
          },
          {
            base: [60, 80, 100, 120, 140],
            damage: 'physical',
            type: 'damage',
            ad: 80,
            ap: 0,
            bAd: 0,
            rname: 'AatroxW',
            note: "Both hits. 1/2 if they leave the area."
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AatroxE'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AatroxR'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    },
    ahri: {
        name: 'ahri',
        lv: 1,
        baseHp: 526,
        hp: 526,
        lvHp: 92,
        armor: 21,
        lvArmor: 3.5,
        resist: 30,
        lvResist: 0.5,
        movement: 330,
        mana: 418,
        lvMana: 25,
        attack: 53,
        baseAttack: 53,
        lvAttack: 3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
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
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    },
    akali: {
        name: 'akali',
        lv: 1,
        baseHp: 575,
        hp: 575,
        lvHp: 95,
        armor: 23,
        lvArmor: 3.5,
        resist: 37,
        lvResist: 1.25,
        movement: 345,
        mana: 200,
        lvMana: 0,
        attack: 62,
        baseAttack: 62,
        lvAttack: 3.3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [30, 55, 80, 105, 130],
            type: "damage",
            damage: "magical",
            ad: 65,
            ap: 60,
            bAd: 0,
            rname: 'AkaliQ'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AkaliW'
          },
          {
            base: [100, 170, 240, 310, 380],
            damage: 'magical',
            type: 'damage',
            ad: 70,
            ap: 100,
            bAd: 0,
            rname: 'AkaliE',
       		note: "Both hits. 1/2 damage if only first part."
          },
          {
            base: [200, 370, 540],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 30,
            bAd: 50,
            rname: 'AkaliR',
            note: "inaccurate. calculated using magical damage both parts with no missing health increase."
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    },
    alistar: {
        name: 'alistar',
        lv: 1,
        baseHp: 600,
        hp: 600,
        lvHp: 106,
        armor: 44,
        lvArmor: 3.5,
        resist: 32,
        lvResist: 1.25,
        movement: 335,
        mana: 350,
        lvMana: 40,
        attack: 62,
        baseAttack: 62,
        lvAttack: 3.75,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [60,105,150,195,240],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 50,
            bAd: 0,
            rname: 'Pulverize'
          },
          {
            base: [55,110,165,220,275],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 70,
            bAd: 0,
            rname: 'Headbutt'
          },
          {
            base: [8,11,14,17,20],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 4,
            bAd: 0,
            rname: 'AlistarE',
            note: "per tick | 10 ticks total"
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'FerociousHowl'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    },
    amumu: {
        name: 'amumu',
        lv: 1,
        baseHp: 613,
        hp: 613,
        lvHp: 80,
        armor: 30,
        lvArmor: 3.8,
        resist: 32,
        lvResist: 1.25,
        movement: 335,
        mana: 285,
        lvMana: 40,
        attack: 53,
        baseAttack: 53,
        lvAttack: 3.8,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,130,180,230,280],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 70,
            bAd: 0,
            rname: 'BandageToss'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AuraofDespair'
          },
          {
            base: [75,95,115,135,155],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 50,
            bAd: 0,
            rname: 'Tantrum',
            note: "per tick | 10 ticks total"
          },
          {
            base: [150, 250, 350],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 80,
            bAd: 0,
            rname: 'CurseoftheSadMummy'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    },
    anivia: {
        name: 'anivia',
        lv: 1,
        baseHp: 480,
        hp: 480,
        lvHp: 82,
        armor: 21,
        lvArmor: 4,
        resist: 30,
        lvResist: 0.5,
        movement: 325,
        mana: 495,
        lvMana: 45,
        attack: 51,
        baseAttack: 51,
        lvAttack: 3.2,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [100,140,180,220,260],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 25,
            bAd: 0,
            rname: 'FlashFrost'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'Crystallize'
          },
          {
            base: [100,160,220,280,340],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 100,
            bAd: 0,
            rname: 'Frostbite',
            note: "enchanted damage | half damage otherwise"
          },
          {
            base: [30, 45, 60],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 12.5,
            bAd: 0,
            rname: 'GlacialStorm',
            note: "damage per tick | max size deals 3x damage"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    },
    annie: {
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
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,115,150,185,220],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 80,
            bAd: 0,
            rname: 'AnnieQ'
          },
          {
            base: [70,115,160,205,250],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 85,
            bAd: 0,
            rname: 'AnnieW'
          },
          {
            base: [20,30,40,50,60],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 20,
            bAd: 0,
            rname: 'AnnieE',
            note: "per basic attack taken"
          },
          {
            base: [150,275,400],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 75,
            bAd: 0,
            rname: 'AnnieR',
            note: "initial summon damage"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    },
    ashe: {
        name: 'ashe',
        lv: 1,
        baseHp: 570,
        hp: 570,
        lvHp: 87,
        armor: 26,
        lvArmor: 3.4,
        resist: 30,
        lvResist: 0.5,
        movement: 325,
        mana: 280,
        lvMana: 32,
        attack: 59,
        baseAttack: 59,
        lvAttack: 2.96,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [0],
            type: "utility",
            damage: "none",
            ad: 0,
            ap: 80,
            bAd: 0,
            rname: 'AsheQ'
          },
          {
            base: [20,35,50,65,80],
            damage: 'physical',
            type: 'damage',
            ad: 100,
            ap: 0,
            bAd: 0,
            rname: 'Volley'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AsheSpiritOfTheHawk'
          },
          {
            base: [200,400,600],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 100,
            bAd: 0,
            rname: 'EnchantedCrystalArrow',
            note: "damage is halved if target is secondary"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    },
    azir: {
        name: 'azir',
        lv: 1,
        baseHp: 552,
        hp: 552,
        lvHp: 92,
        armor: 19,
        lvArmor: 3,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 480,
        lvMana: 21,
        attack: 52,
        baseAttack: 52,
        lvAttack: 2.8,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [70,90,110,130,150],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 30,
            bAd: 0,
            rname: 'AzirQWrapper'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'AzirW'
          },
          {
            base: [60,90,120,150,180],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 40,
            bAd: 0,
            rname: 'AzirEWrapper',
            note: "damage portion"
          },
          {
            base: [175,325,475],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'AzirR'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    },
    bard: {
        name: 'bard',
        lv: 1,
        baseHp: 560,
        hp: 560,
        lvHp: 89,
        armor: 34,
        lvArmor: 4,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 480,
        lvMana: 21,
        attack: 52,
        baseAttack: 52,
        lvAttack: 2.8,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,125,170,215,260],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 65,
            bAd: 0,
            rname: 'BardQ'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'BardW'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'BardE'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'BardR'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    },
    blitzcrank: {
        name: 'blitzcrank',
        lv: 1,
        baseHp: 583,
        hp: 583,
        lvHp: 95,
        armor: 37,
        lvArmor: 3.5,
        resist: 32,
        lvResist: 1.25,
        movement: 325,
        mana: 267.2,
        lvMana: 40,
        attack: 62,
        baseAttack: 62,
        lvAttack: 3.5,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [70,120,170,220,270],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 100,
            bAd: 0,
            rname: 'RocketGrab'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'Overdrive'
          },
          {
            base: [0,0,0,0,0],
            damage: 'physical',
            type: 'damage',
            ad: 100,
            ap: 0,
            bAd: 0,
            rname: 'PowerFist',
            note: "bonus damage, does not calculate base"
          },
          {
            base: [250,375,500],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 100,
            bAd: 0,
            rname: 'StaticField',
            note: "active"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
    },
    brand: {
        name: 'brand',
        lv: 1,
        baseHp: 520,
        hp: 520,
        lvHp: 88,
        armor: 22,
        lvArmor: 3.5,
        resist: 30,
        lvResist: 0.5,
        movement: 340,
        mana: 469,
        lvMana: 21,
        attack: 57,
        baseAttack: 57,
        lvAttack: 3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,110,140,170,200],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 55,
            bAd: 0,
            rname: 'BrandQ'
          },
          {
            base: [75,120,165,210,255],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'BrandW',
            note: "deals 25% more damage if target is ablaze"
          },
          {
            base: [70,95,120,145,170],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 45,
            bAd: 0,
            rname: 'BrandE'
          },
          {
            base: [100,200,300],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 25,
            bAd: 0,
            rname: 'BrandR',
            note: "single hit | max hits 3"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
    },
    braum: {
        name: 'braum',
        lv: 1,
        baseHp: 540,
        hp: 540,
        lvHp: 98,
        armor: 47,
        lvArmor: 4,
        resist: 32,
        lvResist: 1.25,
        movement: 335,
        mana: 310.6,
        lvMana: 45,
        attack: 55,
        baseAttack: 55,
        lvAttack: 3.2,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [75,125,175,225,275],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 0,
            bAd: 0,
            mhp: 2.5,
            rname: 'BraumQ'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'BraumW'
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'BraumE'
          },
          {
            base: [150,300,450],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'BraumRWrapper'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    },
    caitlyn: {
        name: 'caitlyn',
        lv: 1,
        baseHp: 510,
        hp: 510,
        lvHp: 93,
        armor: 28,
        lvArmor: 3.5,
        resist: 30,
        lvResist: 0.5,
        movement: 325,
        mana: 313.7,
        lvMana: 35,
        attack: 62,
        baseAttack: 62,
        lvAttack: 3.3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [50,90,130,170,210],
            type: "damage",
            damage: "physical",
            ad: [50,90,130,170,210],
            ap: 0,
            bAd: 0,
            rname: 'CaitlynPiltoverPeacemaker',
            note: "max damage | 60% if secondary"
          },
          {
            base: [60,105,150,195,240],
            damage: 'physical',
            type: 'damage',
            ad: 0,
            ap: 0,
            bAd: [40,55,70,85,100],
            rname: 'CaitlynYordleTrap',
            note: "bonus damage"
          },
          {
            base: [70,110,150,190,230],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 80,
            bAd: 0,
            rname: 'CaitlynEntrapment',
            note: "net damage"
          },
          {
            base: [150,300,450],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'CaitlynAceintheHole'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    },
    camille: {
        name: 'camille',
        lv: 1,
        baseHp: 540,
        hp: 540,
        lvHp: 98,
        armor: 47,
        lvArmor: 4,
        resist: 32,
        lvResist: 1.25,
        movement: 335,
        mana: 310.6,
        lvMana: 45,
        attack: 55,
        baseAttack: 55,
        lvAttack: 3.2,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [0,0,0,0,0],
            type: "damage",
            damage: "physical",
            ad: 0,
            ap: 0,
            bAd: [20,25,30,35,40],
            rname: 'CamilleQ',
            note: "first active bonus damage"
          },
          {
            base: [70,100,130,160,190],
            type: "damage",
            damage: "physical",
            ad: 0,
            ap: 0,
            bAd: 60,
            rname: 'CamilleW',
            note: "inner cone"
          },
          {
            base: [60,95,130,165,200],
            type: "damage",
            damage: "physical",
            ad: 0,
            ap: 0,
            bAd: 75,
            rname: 'CamilleE'
          },
          {
            base: [5,10,15],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            emhp: [4,6,8],
            rname: 'CamilleR',
            note: "bonus damage per hit, assumes target is at full health"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg',
    },
    cassiopeia: {
        name: 'cassiopeia',
        lv: 1,
        baseHp: 560,
        hp: 560,
        lvHp: 90,
        armor: 18,
        lvArmor: 3.5,
        resist: 32,
        lvResist: 0.5,
        movement: 328,
        mana: 350,
        lvMana: 60,
        attack: 53,
        baseAttack: 53,
        lvAttack: 3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [75,110,145,180,215],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 90,
            bAd: 0,
            rname: 'CassiopeiaQ'
          },
          {
            base: [20,25,30,35,40],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 15,
            bAd: 0,
            rname: 'CassiopeiaW',
            note: "per second"
          },
          {
            base: [10,30,50,70,90],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'CassiopeiaE',
            note: "bonus damage"
          },
          {
            base: [150,250,350],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 50,
            bAd: 0,
            rname: 'CassiopeiaR'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    },
    chogath: {
        name: 'chogath',
        lv: 1,
        baseHp: 574,
        hp: 574,
        lvHp: 80,
        armor: 38,
        lvArmor: 3.5,
        resist: 32,
        lvResist: 1.25,
        movement: 345,
        mana: 270,
        lvMana: 60,
        attack: 69,
        baseAttack: 69,
        lvAttack: 4.2,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [80,135,190,245,300],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 100,
            bAd: 0,
            rname: 'Rupture'
          },
          {
            base: [75,125,175,225,275],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 70,
            bAd: 0,
            rname: 'FeralScream'
          },
          {
            base: [22,37,52,67,82],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 30,
            bAd: 0,
            emhp: 3,
            rname: 'VorpalSpikes',
            note: "no feast stacks | per hit"
          },
          {
            base: [300,475,650],
            damage: 'true',
            type: 'damage',
            ad: 0,
            ap: 50,
            bAd: 0,
            bhp: 10,
            rname: 'Feast'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
    },
    corki: {
        name: 'corki',
        lv: 1,
        baseHp: 518,
        hp: 518,
        lvHp: 87,
        armor: 28,
        lvArmor: 3.5,
        resist: 30,
        lvResist: 0.5,
        movement: 325,
        mana: 350,
        lvMana: 54,
        attack: 55,
        baseAttack: 55,
        lvAttack: 2.5,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [75,120,165,210,255],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 50,
            bAd: 70,
            rname: 'PhosphorusBomb'
          },
          {
            base: [15,22.5,30,37.5,45],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 10,
            bAd: 0,
            rname: 'CarpetBomb',
            note: "regular | per tick"
          },
          {
            base: [7.5,10.625,13.75,16.875,20],
            damage: 'mixed',
            type: 'damage',
            ad: 0,
            ap: 0,
            bAd: 10,
            rname: 'GGun',
            note: "per tick"
          },
          {
            base: [90,125,160],
            damage: 'true',
            type: 'damage',
            ad: [15,45,75],
            ap: 20,
            bAd: 0,
            rname: 'MissileBarrage',
            note: "basic missle | upgraded does 2x"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    },
    darius: {
        name: 'darius',
        lv: 1,
        baseHp: 582,
        hp: 582,
        lvHp: 100,
        armor: 39,
        lvArmor: 4,
        resist: 32,
        lvResist: 1.25,
        movement: 340,
        mana: 263,
        lvMana: 57.5,
        attack: 64,
        baseAttack: 64,
        lvAttack: 5,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [50,80,110,140,170],
            type: "damage",
            damage: "physical",
            ad: [100, 110, 120, 130, 140],
            ap: 0,
            bAd: 0,
            rname: 'DariusCleave',
            note: "blade hit | 35% effective on handle hit"
          },
          {
            base: [0,0,0,0,0],
            damage: 'physical',
            type: 'damage',
            ad: [140, 145, 150, 155, 160],
            ap: 0,
            bAd: 0,
            rname: 'DariusNoxianTacticsONH',
            note: "normal non critical damage | 1.75x crit, 2.10x with ie passive"
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'DariusAxeGrabCone'
          },
          {
            base: [100, 200, 300],
            damage: 'true',
            type: 'damage',
            ad: 0,
            ap: 0,
            bAd: 75,
            rname: 'DariusExecute',
            note: "0 stacks | 2x damage full | 0.2x bonus per stack"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    },
    diana: {
        name: 'diana',
        lv: 1,
        baseHp: 570,
        hp: 570,
        lvHp: 95,
        armor: 31,
        lvArmor: 3.6,
        resist: 32,
        lvResist: 1.25,
        movement: 345,
        mana: 375,
        lvMana: 25,
        attack: 57,
        baseAttack: 57,
        lvAttack: 3,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [60, 95, 130, 165, 200],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 70,
            bAd: 0,
            rname: 'DianaQ'
          },
          {
            base: [54, 90, 126, 162, 198],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 45,
            bAd: 0,
            rname: 'DianaOrbs',
            note: "3 hits | 1/3 damage per orb"
          },
          {
            base: [40, 60, 80, 100, 120],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 40,
            bAd: 0,
            rname: "DianaTeleport"
          },
          {
            base: [200,300,400],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 60,
            bAd: 0,
            rname: 'DianaR',
            note: "single target | does more if ultimate hits multiple champions"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg',
    },
    mundo: {
        name: 'mundo',
        lv: 1,
        baseHp: 583,
        hp: 583,
        lvHp: 89,
        armor: 36,
        lvArmor: 3.5,
        resist: 32,
        lvResist: 1.25,
        movement: 345,
        mana: 0,
        lvMana: 0,
        attack: 61,
        baseAttack: 61,
        lvAttack: 3.5,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [60, 95, 130, 165, 200],
            type: "damage",
            damage: "magical",
            ad: 0,
            ap: 70,
            bAd: 0,
            rname: 'InfectedCleaverMissileCast'
          },
          {
            base: [10, 13.75, 17.5, 21.25, 25],
            damage: 'magical',
            type: 'damage',
            ad: 0,
            ap: 5,
            bAd: 0,
            rname: 'BurningAgony',
            note: "per tick | 4 ticks per second | 0.25s intervals"
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: "Masochism",
            note: "tbd"
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'Sadism'
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg',
    },
    draven: {
        name: 'draven',
        lv: 1,
        baseHp: 605,
        hp: 605,
        lvHp: 90,
        armor: 29,
        lvArmor: 3.3,
        resist: 30,
        lvResist: 0.5,
        movement: 330,
        mana: 360.56,
        lvMana: 39,
        attack: 60,
        baseAttack: 60,
        lvAttack: 3.61,
        critDamage: 175,
        critChance: 0,
        omnivamp: 0,
        lethality: 0,
        arpen: 0,
        mpen: 0,
        flatMPen: 0,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        abilities: [
          {
            base: [35,40,45,50,55],
            type: "damage",
            damage: "physical",
            ad: [35,40,45,50,55],
            ap: 0,
            bAd: 0,
            rname: 'DravenSpinning',
            note: "bonus damage, does not include basic attack damage"
          },
          {
            base: [0],
            damage: 'none',
            type: 'utility',
            ad: 0,
            ap: 0,
            bAd: 0,
            rname: 'DravenFury'
          },
          {
            base: [75,110,145,180,215],
            damage: 'physical',
            type: 'damage',
            ad: 0,
            ap: 0,
            bAd: 50,
            rname: "DravenDoubleShot"
          },
          {
            base: [175,275,375],
            damage: 'physical',
            type: 'damage',
            ad: 0,
            ap: 0,
            bAd: [110,130,150],
            rname: 'DravenRCast',
            note: "single target | first hit | 2.0x damage for 2 hits"
          }
        ],
        items: [{},{},{},{},{},{}],
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    },
    
}

