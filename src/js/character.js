export default class Character {
  constructor(name, characterClass) {
    this.name = name;
    this.characterClass = characterClass;
    this.health = 100;
    this.mana = 100;
    this.attributes = {
      strength: 0,
      intelligence: 0,
      agility: 0,
      charisma: 0,
      defense: 0
    }
    this.level = 1;
    this.inventory = {
      weapons:  [],
      armor: [],
      potions: [],
      misc: []
    }
  } 
}