import {
  all_apparel_list,
  all_item_list,
  all_jewelery_list,
  all_weapon_list,
  armor_traits,
  craftables,
  falseString,
  jewelery_traits,
  styled_items,
  styles,
  traits,
  weapon_traits,
} from "./models";

export const STYLED_ITEMS: styled_items[] = [
  "axes",
  "belts",
  "boots",
  "bows",
  "chests",
  "daggers",
  "gloves",
  "helmets",
  "legs",
  "maces",
  "shields",
  "shoulders",
  "staves",
  "swords",
];

export const ALL_APPAREL_LIST: all_apparel_list[] = [
  "Shield",
  "Robe",
  "Shirt",
  "Shoes",
  "Gloves",
  "Hat",
  "Breeches",
  "Epaulets",
  "Sash",
  "Jack",
  "Boots",
  "Bracers",
  "Helmet",
  "Guards",
  "Arm Cops",
  "Belt",
  "Cuirass",
  "Sabatons",
  "Gauntlets",
  "Helm",
  "Greaves",
  "Pauldron",
  "Girdle",
];

export const ALL_WEAPON_LIST: all_weapon_list[] = [
  "Axe",
  "Mace",
  "Sword",
  "Battle Axe",
  "Maul",
  "Greatsword",
  "Dagger",
  "Bow",
  "Inferno Staff",
  "Ice Staff",
  "Lightning Staff",
  "Restoration Staff",
];

export const ALL_JEWLERY_LIST: all_jewelery_list[] = ["Necklace", "Ring"];

export const ALL_CRAFTABLES_LIST: all_item_list[] = [
  "Axe",
  "Mace",
  "Sword",
  "Battle Axe",
  "Maul",
  "Greatsword",
  "Dagger",
  "Bow",
  "Inferno Staff",
  "Ice Staff",
  "Lightning Staff",
  "Restoration Staff",
  "Shield",
  "Robe",
  "Shirt",
  "Shoes",
  "Gloves",
  "Hat",
  "Breeches",
  "Epaulets",
  "Sash",
  "Jack",
  "Boots",
  "Bracers",
  "Helmet",
  "Guards",
  "Arm Cops",
  "Belt",
  "Cuirass",
  "Sabatons",
  "Gauntlets",
  "Helm",
  "Greaves",
  "Pauldron",
  "Girdle",
  "Necklace",
  "Ring",
];

export const CRAFTABLES: craftables = {
  WEAPON: ALL_WEAPON_LIST,
  ARMOR: ALL_APPAREL_LIST,
  JEWELERY: ALL_JEWLERY_LIST,
};

export const FALSE10: falseString[] = ["false", "false", "false", "false", "false", "false", "false", "false", "false", "false"];

export const WEAPON_TRAITS: weapon_traits[] = ["Powered", "Charged", "Precise", "Infused", "Defending", "Training", "Sharpened", "Decisive", "Nirnhoned"];

export const ARMOR_TRAITS: armor_traits[] = [
  "Sturdy",
  "Impenetrable",
  "Reinforced",
  "Wellfitted",
  "Training",
  "Infused",
  "Invigorating",
  "Divines",
  "Nirnhoned",
];

export const JEWELERY_TRAITS: jewelery_traits[] = ["Healthy", "Arcane", "Robust", "Bloodthirsty", "Harmony", "Infused", "Triune", "Protective", "Swift"];

export const TRAITS: traits = {
  WEAPON_TRAITS,
  ARMOR_TRAITS,
  JEWELERY_TRAITS,
};

export const STYLES: styles[] = [
  "High Elf",
  "Dark Elf",
  "Wood Elf",
  "Nord",
  "Breton",
  "Redguard",
  "Khajiit",
  "Orcish",
  "Argonian",
  "Imperial",
  "Ancient Elf",
  "Barbaric",
  "Primal",
  "Daedric",
  "Dwemer",
  "Glass",
  "Xivkyn",
  "Akaviri",
  "Mercenary",
  "Yokudan",
  "Ancient Orc",
  "Trinimac",
  "Malacath",
  "Outlaw",
  "Aldmeri Dominion",
  "Daggerfall Covenant",
  "Ebonheart Pact",
  "Ra Gada",
  "SoulShriven",
  "Morag Tong",
  "Skinchanger",
  "Abahs Watch",
  "Thieves Guild",
  "Assassins League",
  "DromAthra",
  "Dark Brotherhood",
  "Ebony",
  "Draugr",
  "Minotaur",
  "Order of the Hour",
  "Celestial",
  "Hollowjack",
  "Grim Harlequin",
  "Silken Ring",
  "Mazzatun",
  "Stalhrim Frostcaster",
  "Buoyant Armiger",
  "Ashlander",
  "Militant Ordinator",
  "Telvanni",
  "Hlaalu",
  "Redoran",
  "Tsaesci",
  "Bloodforge",
  "Dreadhorn",
  "Apostle",
  "Ebonshadow",
  "Fang Lair",
  "Scalecaller",
  "Worm Cult",
  "Psijic",
  "Sapiarch",
  "Dremora",
  "Pyandonean",
  "Huntsman",
  "Silver Dawn",
  "Welkynar",
  "Honor Guard",
  "DeadWater",
  "Elder Argonian",
  "Coldsnap",
  "Meridian",
  "Anequina",
  "Pellitine",
  "Sunspire",
  "Dragonguard",
  "Stags of Zen",
  "Moongrave Fane",
  "Refabricated",
  "Shield of Senchal",
  "New Moon Priest",
  "Icereach Coven",
  "Pyre Watch",
  "Blackreach Vanguard",
  "Greymoor",
  "Sea Giant",
  "Ancestral Nord",
  "Ancestral Orc",
  "Ancestral High Elf",
  "Thorn Legion",
  "Hazardous Alchemy",
  "Ancestral Akaviri",
  "Ancestral Breton",
  "Ancestral Reach",
  "Nighthollow",
  "Arkthzand Armory",
  "Wayward Guardian",
  "House Hexos",
  "Waking Flame",
  "TrueSworn",
  "Ivory Brigade",
  "SulXan",
  "Black Fin Legion",
  "Ancient Daedric",
  "Crimson Oath",
  "Silver Rose",
  "Annihilarchs Chosen",
  "Fargrave Guardian",
  "Dreadsails",
  "Ascendant Order",
  "Syrbanic Marine",
  "Steadfast Society",
  "Systres Guardian",
];

export const TRAITS_NEEDED: any = {};

TRAITS_NEEDED[`Ashen Grip`] = 2;
TRAITS_NEEDED[`Death's Wind`] = 2;
TRAITS_NEEDED[`Night's Silence`] = 2;
TRAITS_NEEDED[`Armor of the Seducer`] = 3;
TRAITS_NEEDED[`Torug's Pact`] = 3;
TRAITS_NEEDED[`Twilight's Embrace`] = 3;
TRAITS_NEEDED[`Hist Bark`] = 4;
TRAITS_NEEDED[`Magnus' Gift`] = 4;
TRAITS_NEEDED[`Whitestrake's Retribution`] = 4;
TRAITS_NEEDED[`Alessia's Bulwark`] = 5;
TRAITS_NEEDED[`Song of Lamae`] = 5;
TRAITS_NEEDED[`Vampire's Kiss`] = 5;
TRAITS_NEEDED[`Hunding's Rage`] = 6;
TRAITS_NEEDED[`Night Mother's Gaze`] = 6;
TRAITS_NEEDED[`Willow's Path`] = 6;
TRAITS_NEEDED[`Critical Riposte`] = 3;
TRAITS_NEEDED[`Dauntless Combatant`] = 3;
TRAITS_NEEDED[`Unchained Aggressor`] = 3;
TRAITS_NEEDED[`Oblivion's Foe`] = 8;
TRAITS_NEEDED[`Spectre's Eye`] = 8;
TRAITS_NEEDED[`Kagrenac's Hope`] = 8;
TRAITS_NEEDED[`Orgnum's Scales`] = 8;
TRAITS_NEEDED[`Eyes of Mara`] = 8;
TRAITS_NEEDED[`Shalidor's Curse`] = 8;
TRAITS_NEEDED[`Way of the Arena`] = 8;
TRAITS_NEEDED[`Twice-Born Star`] = 9;
TRAITS_NEEDED[`Armor Master`] = 9;
TRAITS_NEEDED[`Noble's Conquest`] = 5;
TRAITS_NEEDED[`Redistributor`] = 7;
TRAITS_NEEDED[`Law of Julianos`] = 6;
TRAITS_NEEDED[`Morkuldin`] = 9;
TRAITS_NEEDED[`Trial by Fire`] = 3;
TRAITS_NEEDED[`Clever Alchemist`] = 7;
TRAITS_NEEDED[`Eternal Hunt`] = 9;
TRAITS_NEEDED[`Tava's Favor`] = 5;
TRAITS_NEEDED[`Kvatch Gladiator`] = 5;
TRAITS_NEEDED[`Pelinal's Aptitude`] = 9;
TRAITS_NEEDED[`Varen's Legacy`] = 7;
TRAITS_NEEDED[`Assassin's Guile`] = 3;
TRAITS_NEEDED[`Daedric Trickery`] = 8;
TRAITS_NEEDED[`Shacklebreaker`] = 6;
TRAITS_NEEDED[`Fortified Brass`] = 4;
TRAITS_NEEDED[`Innate Axiom`] = 2;
TRAITS_NEEDED[`Mechanical Acuity`] = 6;
TRAITS_NEEDED[`Adept Rider`] = 3;
TRAITS_NEEDED[`Nocturnal's Favor`] = 9;
TRAITS_NEEDED[`Sload's Semblance`] = 6;
TRAITS_NEEDED[`Grave-Stake Collector`] = 7;
TRAITS_NEEDED[`Might of the Lost Legion`] = 4;
TRAITS_NEEDED[`Naga Shaman`] = 2;
TRAITS_NEEDED[`Coldharbour's Favorite`] = 8;
TRAITS_NEEDED[`Senche-raht's Grit`] = 5;
TRAITS_NEEDED[`Vastarie's Tutelage`] = 3;
TRAITS_NEEDED[`Ancient Dragonguard`] = 6;
TRAITS_NEEDED[`Daring Corsair`] = 3;
TRAITS_NEEDED[`New Moon Acolyte`] = 9;
TRAITS_NEEDED[`Dragon's Appetite`] = 7;
TRAITS_NEEDED[`Spell Parasite`] = 3;
TRAITS_NEEDED[`Stuhn's Favor`] = 5;
TRAITS_NEEDED[`Aetherial Ascension`] = 9;
TRAITS_NEEDED[`Legacy of Karth`] = 6;
TRAITS_NEEDED[`Red Eagle's Fury`] = 3;
TRAITS_NEEDED[`Diamond's Victory`] = 5;
TRAITS_NEEDED[`Heartland Conqueror`] = 7;
TRAITS_NEEDED[`Hist Whisperer`] = 3;
TRAITS_NEEDED[`Deadlands Demolisher`] = 7;
TRAITS_NEEDED[`Iron Flask`] = 5;
TRAITS_NEEDED[`Wretched Vitality`] = 3;
TRAITS_NEEDED[`Druid's Braid`] = 7;
TRAITS_NEEDED[`Order's Wrath`] = 3;
TRAITS_NEEDED[`Serpent's Disdain`] = 5;
TRAITS_NEEDED[`Chimera's Rebuke`] = 7;
TRAITS_NEEDED[`Claw of the Forest Wraith`] = 3;
TRAITS_NEEDED[`Old Growth Brewer`] = 5;

export interface unlocks_obj {
  AXES: axes[];
  BELTS: belts[];
  BOOTS: boots[];
  BOWS: bows[];
  CHESTS: chests[];
  DAGGERS: daggers[];
  GLOVES: gloves[];
  HELMETS: helmets[];
  LEGS: legs[];
  MACES: maces[];
  SHIELDS: shields[];
  SHOULDERS: shoulders[];
  STAVES: staves[];
  SWORDS: swords[];
}

export const UNLOCKS_OBJ: unlocks_obj = {
  AXES: ["Battle Axe", "Axe"],
  BELTS: ["Belt", "Sash", "Girdle"],
  BOOTS: ["Sabatons", "Shoes", "Boots"],
  BOWS: ["Bow"],
  CHESTS: ["Robe", "Shirt", "Jack", "Curaiss"],
  DAGGERS: ["Dagger"],
  GLOVES: ["Gauntlets", "Gloves", "Bracers"],
  HELMETS: ["Helm", "Hat", "Helmet"],
  LEGS: ["Greaves", "Breeches", "Guards"],
  MACES: ["Maul", "Mace"],
  SHIELDS: ["Shield"],
  SHOULDERS: ["Arm Cops", "Pauldron", "Epaulets"],
  STAVES: ["Inferno Staff", "Ice Staff", "Lightning Staff", "Restoration Staff"],
  SWORDS: ["Sword", "Greatsword"],
};

export type unlocks_list =
  | "AXES"
  | "BELTS"
  | "BOOTS"
  | "BOWS"
  | "CHESTS"
  | "DAGGERS"
  | "GLOVES"
  | "HELMETS"
  | "LEGS"
  | "MACES"
  | "SHIELDS"
  | "SHOULDERS"
  | "STAVES"
  | "SWORDS";

export const UNLOCKS_LIST: unlocks_list[] = [
  "AXES",
  "BELTS",
  "BOOTS",
  "BOWS",
  "CHESTS",
  "DAGGERS",
  "GLOVES",
  "HELMETS",
  "LEGS",
  "MACES",
  "SHIELDS",
  "SHOULDERS",
  "STAVES",
  "SWORDS",
];

export type axes = "Battle Axe" | "Axe";
export type belts = "Belt" | "Sash" | "Girdle";
export type boots = "Sabatons" | "Shoes" | "Boots";
export type bows = "Bow";
export type chests = "Robe" | "Shirt" | "Jack" | "Curaiss";
export type daggers = "Dagger";
export type gloves = "Gauntlets" | "Gloves" | "Bracers";
export type helmets = "Helm" | "Hat" | "Helmet";
export type legs = "Greaves" | "Breeches" | "Guards";
export type maces = "Maul" | "Mace";
export type shields = "Shield";
export type shoulders = "Arm Cops" | "Pauldron" | "Epaulets";
export type staves = "Inferno Staff" | "Ice Staff" | "Lightning Staff" | "Restoration Staff";

export type swords = "Sword" | "Greatsword";

export const MOTIFS: motifs[] = [
  "Crafting Motif 1: High Elf Style",
  "Crafting Motif 2: Dark Elf Style",
  "Crafting Motif 3: Wood Elf Style",
  "Crafting Motif 4: Nord Style",
  "Crafting Motif 5: Breton Style",
  "Crafting Motif 6: Redguard Style",
  "Crafting Motif 7: Khajiit Style",
  "Crafting Motif 8: Orc Style",
  "Crafting Motif 9: Argonian Style",
  "Crafting Motif 10: Imperial Style",
  "Crafting Motif 11: Ancient Elf Style",
  "Crafting Motif 12: Barbaric Style",
  "Crafting Motif 13: Primal Style",
  "Crafting Motif 14: Daedric Style",
  "Crafting Motif 15: Dwemer Style",
  "Crafting Motif 16: Glass Style",
  "Crafting Motif 17: Xivkyn Style",
  "Crafting Motif 18: Akaviri Style",
  "Crafting Motif 19: Mercenary Style",
  "Crafting Motif 20: Yokudan Style",
  "Crafting Motif 21: Ancient Orc Style",
  "Crafting Motif 22: Trinimac Style",
  "Crafting Motif 23: Malacath Style",
  "Crafting Motif 24: Outlaw Style",
  "Crafting Motif 25: Aldmeri Dominion Style",
  "Crafting Motif 26: Daggerfall Covenant Style",
  "Crafting Motif 27: Ebonheart Pact Style",
  "Crafting Motif 28: Ra Gada Style",
  "Crafting Motif 29: Soul-Shriven Style",
  "Crafting Motif 30: Morag Tong Style",
  "Crafting Motif 31: Skinchanger Style",
  "Crafting Motif 32: Abah's Watch Style",
  "Crafting Motif 33: Thieves Guild Style",
  "Crafting Motif 34: Assassins League Style",
  "Crafting Motif 35: Dro-m'Athra Style",
  "Crafting Motif 36: Dark Brotherhood Style",
  "Crafting Motif 37: Ebony Style",
  "Crafting Motif 38: Draugr Style",
  "Crafting Motif 39: Minotaur Style",
  "Crafting Motif 40: Order Hour Style",
  "Crafting Motif 41: Celestial Style",
  "Crafting Motif 42: Hollowjack Style",
  "Crafting Motif 43: Grim Harlequin Style",
  "Crafting Motif 44: Silken Ring Style",
  "Crafting Motif 45: Mazzatun Style",
  "Crafting Motif 46: Frostcaster Style",
  "Crafting Motif 47: Buoyant Armiger Style",
  "Crafting Motif 48: Ashlander Style",
  "Crafting Motif 49: Militant Ordinator Style",
  "Crafting Motif 50: Telvanni Style",
  "Crafting Motif 51: Hlaalu Style",
  "Crafting Motif 52: Redoran Style",
  "Crafting Motif 53: Tsaesci Style",
  "Crafting Motif 54: Bloodforge Style",
  "Crafting Motif 55: Dreadhorn",
  "Crafting Motif 56: Apostle",
  "Crafting Motif 57: Ebonshadow Style",
  "Crafting Motif 58: Fang Lair",
  "Crafting Motif 59: Scalecaller",
  "Crafting Motif 60: Worm Cult",
  "Crafting Motif 61: Psijic",
  "Crafting Motif 62: Sapiarch",
  "Crafting Motif 63: Dremora Style",
  "Crafting Motif 64: Pyandonean Style",
  "Crafting Motif 65: Huntsman",
  "Crafting Motif 66: Silver Dawn",
  "Crafting Motif 67: Welkynar",
  "Crafting Motif 68: Honor Guard Style",
  "Crafting Motif 69: Dead-Water Style",
  "Crafting Motif 70: Elder Argonian",
  "Crafting Motif 71: Coldsnap Style",
  "Crafting Motif 72: Meridian Style",
  "Crafting Motif 73: Anequina Style",
  "Crafting Motif 74: Pellitine Style",
  "Crafting Motif 75: Sunspire Style",
  "Crafting Motif 76: Dragonguard Style",
  "Crafting Motif 77: Stags of Z'en Style",
  "Crafting Motif 78: Moongrave Fane Style",
  "Crafting Motif 79: Refabricated Style",
  "Crafting Motif 80: Shield of Senchal Style",
  "Crafting Motif 81: New Moon Priest Style",
  "Crafting Motif 82: Icereach Coven Style",
  "Crafting Motif 83: Pyre Watch Style",
  "Crafting Motif 84: Blackreach Vanguard Style",
  "Crafting Motif 85: Greymoor Style",
  "Crafting Motif 86: Sea Giant Style",
  "Crafting Motif 87: Ancestral Nord Style",
  "Crafting Motif 88: Ancestral Orc Style",
  "Crafting Motif 89: Ancestral High Elf Style",
  "Crafting Motif 90: Thorn Legion Style",
  "Crafting Motif 91: Hazardous Alchemy Style",
  "Crafting Motif 92: Ancestral Akaviri Style",
  "Crafting Motif 93: Ancestral Breton Style",
  "Crafting Motif 94: Ancestral Reach Style",
  "Crafting Motif 95: Nighthollow Style",
  "Crafting Motif 96: Arkthzand Armory Style",
  "Crafting Motif 97: Wayward Guardian Style",
  "Crafting Motif 98: House Hexos Style",
  "Crafting Motif 99: Waking Flame Style",
  "Crafting Motif 100: True-Sworn Style",
  "Crafting Motif 101: Ivory Brigade Style",
  "Crafting Motif 102: Sul-Xan Style",
  "Crafting Motif 103: Black Fin Legion Style",
  "Crafting Motif 104: Ancient Daedric Style",
  "Crafting Motif 105: Crimson Oath Style",
  "Crafting Motif 106: Silver Rose Style",
  "Crafting Motif 107: Annihilarch's Chosen Style",
  "Crafting Motif 108: Fargrave Guardian Style",
  "Crafting Motif 110: Dreadsails Style",
  "Crafting Motif 111: Ascendant Order Style",
  "Crafting Motif 112: Syrabanic Marine Style",
  "Crafting Motif 113: Steadfast Society Style",
  "Crafting Motif 114: Systres Guardian Style",
];

export type motifs =
  | "Crafting Motif 1: High Elf Style"
  | "Crafting Motif 2: Dark Elf Style"
  | "Crafting Motif 3: Wood Elf Style"
  | "Crafting Motif 4: Nord Style"
  | "Crafting Motif 5: Breton Style"
  | "Crafting Motif 6: Redguard Style"
  | "Crafting Motif 7: Khajiit Style"
  | "Crafting Motif 8: Orc Style"
  | "Crafting Motif 9: Argonian Style"
  | "Crafting Motif 10: Imperial Style"
  | "Crafting Motif 11: Ancient Elf Style"
  | "Crafting Motif 12: Barbaric Style"
  | "Crafting Motif 13: Primal Style"
  | "Crafting Motif 14: Daedric Style"
  | "Crafting Motif 15: Dwemer Style"
  | "Crafting Motif 16: Glass Style"
  | "Crafting Motif 17: Xivkyn Style"
  | "Crafting Motif 18: Akaviri Style"
  | "Crafting Motif 19: Mercenary Style"
  | "Crafting Motif 20: Yokudan Style"
  | "Crafting Motif 21: Ancient Orc Style"
  | "Crafting Motif 22: Trinimac Style"
  | "Crafting Motif 23: Malacath Style"
  | "Crafting Motif 24: Outlaw Style"
  | "Crafting Motif 25: Aldmeri Dominion Style"
  | "Crafting Motif 26: Daggerfall Covenant Style"
  | "Crafting Motif 27: Ebonheart Pact Style"
  | "Crafting Motif 28: Ra Gada Style"
  | "Crafting Motif 29: Soul-Shriven Style"
  | "Crafting Motif 30: Morag Tong Style"
  | "Crafting Motif 31: Skinchanger Style"
  | "Crafting Motif 32: Abah's Watch Style"
  | "Crafting Motif 33: Thieves Guild Style"
  | "Crafting Motif 34: Assassins League Style"
  | "Crafting Motif 35: Dro-m'Athra Style"
  | "Crafting Motif 36: Dark Brotherhood Style"
  | "Crafting Motif 37: Ebony Style"
  | "Crafting Motif 38: Draugr Style"
  | "Crafting Motif 39: Minotaur Style"
  | "Crafting Motif 40: Order Hour Style"
  | "Crafting Motif 41: Celestial Style"
  | "Crafting Motif 42: Hollowjack Style"
  | "Crafting Motif 43: Grim Harlequin Style"
  | "Crafting Motif 44: Silken Ring Style"
  | "Crafting Motif 45: Mazzatun Style"
  | "Crafting Motif 46: Frostcaster Style"
  | "Crafting Motif 47: Buoyant Armiger Style"
  | "Crafting Motif 48: Ashlander Style"
  | "Crafting Motif 49: Militant Ordinator Style"
  | "Crafting Motif 50: Telvanni Style"
  | "Crafting Motif 51: Hlaalu Style"
  | "Crafting Motif 52: Redoran Style"
  | "Crafting Motif 53: Tsaesci Style"
  | "Crafting Motif 54: Bloodforge Style"
  | "Crafting Motif 55: Dreadhorn"
  | "Crafting Motif 56: Apostle"
  | "Crafting Motif 57: Ebonshadow Style"
  | "Crafting Motif 58: Fang Lair"
  | "Crafting Motif 59: Scalecaller"
  | "Crafting Motif 60: Worm Cult"
  | "Crafting Motif 61: Psijic"
  | "Crafting Motif 62: Sapiarch"
  | "Crafting Motif 63: Dremora Style"
  | "Crafting Motif 64: Pyandonean Style"
  | "Crafting Motif 65: Huntsman"
  | "Crafting Motif 66: Silver Dawn"
  | "Crafting Motif 67: Welkynar"
  | "Crafting Motif 68: Honor Guard Style"
  | "Crafting Motif 69: Dead-Water Style"
  | "Crafting Motif 70: Elder Argonian"
  | "Crafting Motif 71: Coldsnap Style"
  | "Crafting Motif 72: Meridian Style"
  | "Crafting Motif 73: Anequina Style"
  | "Crafting Motif 74: Pellitine Style"
  | "Crafting Motif 75: Sunspire Style"
  | "Crafting Motif 76: Dragonguard Style"
  | "Crafting Motif 77: Stags of Z'en Style"
  | "Crafting Motif 78: Moongrave Fane Style"
  | "Crafting Motif 79: Refabricated Style"
  | "Crafting Motif 80: Shield of Senchal Style"
  | "Crafting Motif 81: New Moon Priest Style"
  | "Crafting Motif 82: Icereach Coven Style"
  | "Crafting Motif 83: Pyre Watch Style"
  | "Crafting Motif 84: Blackreach Vanguard Style"
  | "Crafting Motif 85: Greymoor Style"
  | "Crafting Motif 86: Sea Giant Style"
  | "Crafting Motif 87: Ancestral Nord Style"
  | "Crafting Motif 88: Ancestral Orc Style"
  | "Crafting Motif 89: Ancestral High Elf Style"
  | "Crafting Motif 90: Thorn Legion Style"
  | "Crafting Motif 91: Hazardous Alchemy Style"
  | "Crafting Motif 92: Ancestral Akaviri Style"
  | "Crafting Motif 93: Ancestral Breton Style"
  | "Crafting Motif 94: Ancestral Reach Style"
  | "Crafting Motif 95: Nighthollow Style"
  | "Crafting Motif 96: Arkthzand Armory Style"
  | "Crafting Motif 97: Wayward Guardian Style"
  | "Crafting Motif 98: House Hexos Style"
  | "Crafting Motif 99: Waking Flame Style"
  | "Crafting Motif 100: True-Sworn Style"
  | "Crafting Motif 101: Ivory Brigade Style"
  | "Crafting Motif 102: Sul-Xan Style"
  | "Crafting Motif 103: Black Fin Legion Style"
  | "Crafting Motif 104: Ancient Daedric Style"
  | "Crafting Motif 105: Crimson Oath Style"
  | "Crafting Motif 106: Silver Rose Style"
  | "Crafting Motif 107: Annihilarch's Chosen Style"
  | "Crafting Motif 108: Fargrave Guardian Style"
  | "Crafting Motif 110: Dreadsails Style"
  | "Crafting Motif 111: Ascendant Order Style"
  | "Crafting Motif 112: Syrabanic Marine Style"
  | "Crafting Motif 113: Steadfast Society Style"
  | "Crafting Motif 114: Systres Guardian Style";
