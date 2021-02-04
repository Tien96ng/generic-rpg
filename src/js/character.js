export default class Character {
  constructor(name, characterClass) {
    this.name = name;
    this.characterClass = characterClass;
    this.attibutes = {}
    this.level = 1;
    this.inventory = {
      weapons:  [],
      armor: [],
      potions: [],
      misc: []
    }
  } 
}