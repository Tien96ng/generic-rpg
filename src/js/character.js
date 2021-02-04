export default class Character {
  constructor(name, characterClass) {
    this.name = name;
    this.characterClass = characterClass;
    this.level = 1;
    this.xp = 0;
    this.health = 100;
    this.mana = 100;
    this.attributes = {
      strength: 0,
      intelligence: 0,
      agility: 0,
      charisma: 0,
      defense: 0
    }
    this.inventory = {
      weapon:  ["stick"],
      armor: ["t-shirt", "pants"],
      potion: [],
      misc: []
    }
  }

  viewInventory() {
    return this.inventory;
  }

  addToInventory(itemType, item) {
    this.inventory[itemType] = this.inventory[itemType].concat(item);
    return this.inventory;
  }
}