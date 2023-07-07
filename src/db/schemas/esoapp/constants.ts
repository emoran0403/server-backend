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

export const ARMOR_TRAITS: armor_traits[] = ["Sturdy", "Impenetrable", "Reinforced", "Wellfitted", "Training", "Infused", "Invigorating", "Divines", "Nirnhoned"];

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
