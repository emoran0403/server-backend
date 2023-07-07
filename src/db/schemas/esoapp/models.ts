export type styled_items = "axes" | "belts" | "boots" | "bows" | "chests" | "daggers" | "gloves" | "helmets" | "legs" | "maces" | "shields" | "shoulders" | "staves" | "swords";

export type tables = "jewelery" | "weapon" | "armor";
export interface traits {
  WEAPON_TRAITS: weapon_traits[];
  ARMOR_TRAITS: armor_traits[];
  JEWELERY_TRAITS: jewelery_traits[];
}

export interface craftables {
  WEAPON: all_weapon_list[];
  ARMOR: all_apparel_list[];
  JEWELERY: all_jewelery_list[];
}

export interface reqDTO {
  player_uuid?: string;
  writ_uuid?: string;
  completion?: trueFalseString;
  writ?: writ;
  is_jewelery?: boolean;
  username?: string;
  plainTextPassword?: string;
  style?: styles;
  itemValues?: item_values[];
  uuidArray?: number[];
  table?: tables;
  item?: all_item_list;
  traitValues: trait_values[];
  new_style?: string[];
  trait?: all_trait_list;
}

export interface writ {
  item: all_item_list;
  quality: qualities;
  trait: all_trait_list;
  set: armor_sets;
  style?: styles;
  reward: number;
}

export interface db_writ extends writ {
  writ_uuid: number;
  player_uuid: string;
  created_at: string;
  is_jewelery: boolean;
  completed: boolean;
}

export type qualities = "Superior" | "Epic" | "Legendary";
export type falseString = "false";
export type trueFalseString = "true" | "false";

export type weapon_traits = "Powered" | "Charged" | "Precise" | "Infused" | "Defending" | "Training" | "Sharpened" | "Decisive" | "Nirnhoned";
export type armor_traits = "Sturdy" | "Impenetrable" | "Reinforced" | "Wellfitted" | "Training" | "Infused" | "Invigorating" | "Divines" | "Nirnhoned";
export type jewelery_traits = "Healthy" | "Arcane" | "Robust" | "Bloodthirsty" | "Harmony" | "Infused" | "Triune" | "Protective" | "Swift";
export type all_trait_list = weapon_traits | jewelery_traits | jewelery_traits;
export type all_jewelery_list = "Necklace" | "Ring";

export type all_weapon_list =
  | "Axe"
  | "Mace"
  | "Sword"
  | "Battle Axe"
  | "Maul"
  | "Greatsword"
  | "Dagger"
  | "Bow"
  | "Inferno Staff"
  | "Ice Staff"
  | "Lightning Staff"
  | "Restoration Staff";

export type all_apparel_list =
  | "Shield"
  | "Robe"
  | "Shirt"
  | "Shoes"
  | "Gloves"
  | "Hat"
  | "Breeches"
  | "Epaulets"
  | "Sash"
  | "Jack"
  | "Boots"
  | "Bracers"
  | "Helmet"
  | "Guards"
  | "Arm Cops"
  | "Belt"
  | "Cuirass"
  | "Sabatons"
  | "Gauntlets"
  | "Helm"
  | "Greaves"
  | "Pauldron"
  | "Girdle";

export type all_item_list = all_jewelery_list | all_weapon_list | all_apparel_list;
export type all_styled_items = all_weapon_list | all_apparel_list;

export type item_values = [all_styled_items, trueFalseString];
export type trait_values = [all_trait_list, trueFalseString];

export type styles =
  | "High Elf"
  | "Dark Elf"
  | "Wood Elf"
  | "Nord"
  | "Breton"
  | "Redguard"
  | "Khajiit"
  | "Orcish"
  | "Argonian"
  | "Imperial"
  | "Ancient Elf"
  | "Barbaric"
  | "Primal"
  | "Daedric"
  | "Dwemer"
  | "Glass"
  | "Xivkyn"
  | "Akaviri"
  | "Mercenary"
  | "Yokudan"
  | "Ancient Orc"
  | "Trinimac"
  | "Malacath"
  | "Outlaw"
  | "Aldmeri Dominion"
  | "Daggerfall Covenant"
  | "Ebonheart Pact"
  | "Ra Gada"
  | "SoulShriven"
  | "Morag Tong"
  | "Skinchanger"
  | "Abahs Watch"
  | "Thieves Guild"
  | "Assassins League"
  | "DromAthra"
  | "Dark Brotherhood"
  | "Ebony"
  | "Draugr"
  | "Minotaur"
  | "Order of the Hour"
  | "Celestial"
  | "Hollowjack"
  | "Grim Harlequin"
  | "Silken Ring"
  | "Mazzatun"
  | "Stalhrim Frostcaster"
  | "Buoyant Armiger"
  | "Ashlander"
  | "Militant Ordinator"
  | "Telvanni"
  | "Hlaalu"
  | "Redoran"
  | "Tsaesci"
  | "Bloodforge"
  | "Dreadhorn"
  | "Apostle"
  | "Ebonshadow"
  | "Fang Lair"
  | "Scalecaller"
  | "Worm Cult"
  | "Psijic"
  | "Sapiarch"
  | "Dremora"
  | "Pyandonean"
  | "Huntsman"
  | "Silver Dawn"
  | "Welkynar"
  | "Honor Guard"
  | "DeadWater"
  | "Elder Argonian"
  | "Coldsnap"
  | "Meridian"
  | "Anequina"
  | "Pellitine"
  | "Sunspire"
  | "Dragonguard"
  | "Stags of Zen"
  | "Moongrave Fane"
  | "Refabricated"
  | "Shield of Senchal"
  | "New Moon Priest"
  | "Icereach Coven"
  | "Pyre Watch"
  | "Blackreach Vanguard"
  | "Greymoor"
  | "Sea Giant"
  | "Ancestral Nord"
  | "Ancestral Orc"
  | "Ancestral High Elf"
  | "Thorn Legion"
  | "Hazardous Alchemy"
  | "Ancestral Akaviri"
  | "Ancestral Breton"
  | "Ancestral Reach"
  | "Nighthollow"
  | "Arkthzand Armory"
  | "Wayward Guardian"
  | "House Hexos"
  | "Waking Flame"
  | "TrueSworn"
  | "Ivory Brigade"
  | "SulXan"
  | "Black Fin Legion"
  | "Ancient Daedric"
  | "Crimson Oath"
  | "Silver Rose"
  | "Annihilarchs Chosen"
  | "Fargrave Guardian"
  | "Dreadsails"
  | "Ascendant Order"
  | "Syrbanic Marine"
  | "Steadfast Society"
  | "Systres Guardian";

export type armor_sets =
  | `Ashen Grip`
  | `Deaths Wind`
  | `Nights Silence`
  | `Armor of the Seducer`
  | `Torugs Pact`
  | `Twilights Embrace`
  | `Hist Bark`
  | `Magnus Gift`
  | `Whitestrakes Retribution`
  | `Alessias Bulwark`
  | `Song of Lamae`
  | `Vampires Kiss`
  | `Hundings Rage`
  | `Night Mothers Gaze`
  | `Willows Path`
  | `Critical Riposte`
  | `Dauntless Combatant`
  | `Unchained Aggressor`
  | `Oblivions Foe`
  | `Spectres Eye`
  | `Kagrenacs Hope`
  | `Orgnums Scales`
  | `Eyes of Mara`
  | `Shalidors Curse`
  | `Way of the Arena`
  | `TwiceBorn Star`
  | `Armor Master`
  | `Nobles Conquest`
  | `Redistributor`
  | `Law of Julianos`
  | `Morkuldin`
  | `Trial by Fire`
  | `Clever Alchemist`
  | `Eternal Hunt`
  | `Tavas Favor`
  | `Kvatch Gladiator`
  | `Pelinals Aptitude`
  | `Varens Legacy`
  | `Assassins Guile`
  | `Daedric Trickery`
  | `Shacklebreaker`
  | `Fortified Brass`
  | `Innate Axiom`
  | `Mechanical Acuity`
  | `Adept Rider`
  | `Nocturnals Favor`
  | `Sloads Semblance`
  | `GraveStake Collector`
  | `Might of the Lost Legion`
  | `Naga Shaman`
  | `Coldharbours Favorite`
  | `Sencherahts Grit`
  | `Vastaries Tutelage`
  | `Ancient Dragonguard`
  | `Daring Corsair`
  | `New Moon Acolyte`
  | `Dragons Appetite`
  | `Spell Parasite`
  | `Stuhns Favor`
  | `Aetherial Ascension`
  | `Legacy of Karth`
  | `Red Eagles Fury`
  | `Diamonds Victory`
  | `Heartland Conqueror`
  | `Hist Whisperer`
  | `Deadlands Demolisher`
  | `Iron Flask`
  | `Wretched Vitality`
  | `Druids Braid`
  | `Orders Wrath`
  | `Serpents Disdain`
  | `Chimeras Rebuke`
  | `Claw of the Forest Wraith`
  | `Old Growth Brewer`;

export interface db_list_response {
  player_uuid: string;
  [key: string]: boolean | string;
}
