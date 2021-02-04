import Character from "./character.js";

export default class Battle {
  constructor(player) {
    this.player = player;
    this.monster = {},
    this.monsterList = [
      {
        name: "Goblin",
        greeting: "Gimme your gold",
        health: 50,
        mana: 50,
        defense: 10,
        xpGained: 12,
        rewards: ["stick", "claymore"],
        moves: {
          slap: 5,
          punch: 7,
          dropKick: 12,
          cower: 0
        }
      },
      {
        name: "Ork",
        greeting: "Look's like meat's back on the menu!",
        health: 100,
        mana: 100,
        defense: 20,
        xpGained: 18,
        rewards: ["knife", "health potion"],
        moves: {
          slice: 10,
          throw: 12,
          bite: 18
        }
      },
      {
        name: "Juggernaut",
        greeting: "You're a wee little thing ain't ya?",
        health: 150,
        mana: 100,
        defense: 50,
        xpGained: 20,
        rewards: ["long sword", "cooked meat"],
        moves: {
          swat: 10,
          pound: 15,
          smother: 25,
          winded: 0
        }
      }
    ]
  }

  randomEncounter() {
    let randomNum =  Math.floor(Math.random() * this.monsterList.length);
    this.monster = this.monsterList[randomNum];
    return `${this.monster.name}: ${this.monster.greeting}`;
  }

  battleMonster() {
    return this.player;
  }
}