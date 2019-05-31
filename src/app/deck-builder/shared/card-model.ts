export interface Card {
  artist: string;
  cmc: number;
  colorIdentity: string [];
  colors: string [];
// flavor: string;
  foreignNames: string [];
  id: string;
  layout: string;
  // legalities []; complex object?
  manaCost: string;
  name: string;
  number: string;
  printings: string [];
  rarity: string [];
  rulings: string [];
  set: string;
// setname: string;
  subtypes: string [];
  supertypes: string [];
  text: string;
  type: string;
  types: string [];


// Below are not in the actual response
  names: string [];
  power: number;
  toughness: number;
  multiverseid: number;
  imageUrl: string;
  originalText: string;
  originalType: string;
}
