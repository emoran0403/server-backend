export type tables = "jewelry" | "weapon" | "armor";
export interface traits {
  WEAPON_TRAITS: weapon_traits[];
  ARMOR_TRAITS: armor_traits[];
  JEWELRY_TRAITS: jewelry_traits[];
}

export interface craftables {
  WEAPON: all_weapon_list[];
  ARMOR: all_apparel_list[];
  JEWELRY: all_jewelry_list[];
}

export interface writ {
  item: all_item_list;
  quality: qualities;
  trait: all_trait_list;
  set: armor_sets;
  style?: styles;
  reward: number;
}

export type qualities = "Superior" | "Epic" | "Legendary";
export type falseString = "false";
export type trueFalseString = "true" | "false";

export type weapon_traits = "Powered" | "Charged" | "Precise" | "Infused" | "Defending" | "Training" | "Sharpened" | "Decisive" | "Nirnhoned";
export type armor_traits =
  | "Sturdy"
  | "Impenetrable"
  | "Reinforced"
  | "Well-fitted"
  | "Training"
  | "Infused"
  | "Invigorating"
  | "Divines"
  | "Nirnhoned";
export type jewelry_traits = "Healthy" | "Arcane" | "Robust" | "Bloodthirsty" | "Harmony" | "Infused" | "Triune" | "Protective" | "Swift";
export type all_trait_list = weapon_traits | jewelry_traits | jewelry_traits;
export type all_jewelry_list = "Necklace" | "Ring";

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
  | "Curaiss"
  | "Sabatons"
  | "Gauntlets"
  | "Helm"
  | "Greaves"
  | "Pauldron"
  | "Girdle";

export type all_item_list = all_jewelry_list | all_weapon_list | all_apparel_list;
export type all_styled_items = all_weapon_list | all_apparel_list;

export type item_values = [all_styled_items, trueFalseString];

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
  | "Soul-Shriven"
  | "Morag Tong"
  | "Skinchanger"
  | "Abah's Watch"
  | "Thieves Guild"
  | "Assassins League"
  | "Dro-m'Athra"
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
  | "Dead-Water"
  | "Elder Argonian"
  | "Coldsnap"
  | "Meridian"
  | "Anequina"
  | "Pellitine"
  | "Sunspire"
  | "Dragonguard"
  | "Stags of Z'en"
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
  | "True-Sworn"
  | "Ivory Brigade"
  | "Sul-Xan"
  | "Black Fin Legion"
  | "Ancient Daedric"
  | "Crimson Oath"
  | "Silver Rose"
  | "Annihilarch's Chosen"
  | "Fargrave Guardian"
  | "Dreadsails"
  | "Ascendant Order"
  | "Syrbanic Marine"
  | "Steadfast Society"
  | "Systres Guardian";

export type armor_sets =
  | `Ashen Grip`
  | `Death's Wind`
  | `Night's Silence`
  | `Armor of the Seducer`
  | `Torug's Pact`
  | `Twilight's Embrace`
  | `Hist Bark`
  | `Magnus' Gift`
  | `Whitestrake's Retribution`
  | `Alessia's Bulwark`
  | `Song of Lamae`
  | `Vampire's Kiss`
  | `Hunding's Rage`
  | `Night Mother's Gaze`
  | `Willow's Path`
  | `Critical Riposte`
  | `Dauntless Combatant`
  | `Unchained Aggressor`
  | `Oblivion's Foe`
  | `Spectre's Eye`
  | `Kagrenac's Hope`
  | `Orgnum's Scales`
  | `Eyes of Mara`
  | `Shalidor's Curse`
  | `Way of the Arena`
  | `Twice-Born Star`
  | `Armor Master`
  | `Noble's Conquest`
  | `Redistributor`
  | `Law of Julianos`
  | `Morkuldin`
  | `Trial by Fire`
  | `Clever Alchemist`
  | `Eternal Hunt`
  | `Tava's Favor`
  | `Kvatch Gladiator`
  | `Pelinal's Aptitude`
  | `Varen's Legacy`
  | `Assassin's Guile`
  | `Daedric Trickery`
  | `Shacklebreaker`
  | `Fortified Brass`
  | `Innate Axiom`
  | `Mechanical Acuity`
  | `Adept Rider`
  | `Nocturnal's Favor`
  | `Sload's Semblance`
  | `Grave-Stake Collector`
  | `Might of the Lost Legion`
  | `Naga Shaman`
  | `Coldharbour's Favorite`
  | `Senche-raht's Grit`
  | `Vastarie's Tutelage`
  | `Ancient Dragonguard`
  | `Daring Corsair`
  | `New Moon Acolyte`
  | `Dragon's Appetite`
  | `Spell Parasite`
  | `Stuhn's Favor`
  | `Aetherial Ascension`
  | `Legacy of Karth`
  | `Red Eagle's Fury`
  | `Diamond's Victory`
  | `Heartland Conqueror`
  | `Hist Whisperer`
  | `Deadlands Demolisher`
  | `Iron Flask`
  | `Wretched Vitality`
  | `Druid's Braid`
  | `Order's Wrath`
  | `Serpent's Disdain`
  | `Chimera's Rebuke`
  | `Claw of the Forest Wraith`
  | `Old Growth Brewer`;
