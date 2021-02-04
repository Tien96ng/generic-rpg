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
    },
    this.movesList = {
      swordsman: {
        slash: 5,
        stab: 3,
        kick: 4,
        punch: 4
      },
      archer: {
        shoot: 10,
        rapidFire: this.level * 3
      },
      wizard: {
        hocusPocus: 8,
        electrocute: 9,
        burn: 10,
        heal: 10 // Change later
      },
      thief: {
        slash: 3,
        sneakAttack: 10,
        throw: this.inventory.weapon.length * 2
      },
    }
  }

  viewInventory() {
    return this.inventory;
  }

  addToInventory(itemType, item) {
    this.inventory[itemType] = this.inventory[itemType].concat(item);
    return this.inventory;
  }

  levelUp() {
    let leftOverXP = 0;
    if(this.xp >= 100) {
      leftOverXP = this.xp - 100;
      this.level++;
      this.xp = leftOverXP
      return true;
    } else {
      return false;
    }
  }
}