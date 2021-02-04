import Game from "../src/js/game.js";
import Character from "../src/js/character.js";
import Battle from "../src/js/battle.js";

describe("Game", () => {
  test("Should return a game with player1 created.", () => {
    const newGame =  new Game("player1");
    expect(newGame.player1).toEqual("player1");
  });
});

describe("Character", () => {
  test("Should return new character with their name and their choosen class.", () => {
    const newCharacter =  new Character("Cloud", "Swordsman");
    expect(newCharacter.name).toEqual("Cloud");
    expect(newCharacter.characterClass).toEqual("Swordsman");
  });

  test("Should return a new character starting at level 1.", () => {
    const newCharacter = new Character("Donald Duck", "Swordsman");
    expect(newCharacter.level).toEqual(1);
  });

  test("Should return a new character starting at 0xp (experience points).", () => {
    const newCharacter = new Character("Tony Stark", "Mechanic");
    expect(newCharacter.xp).toEqual(0);
  });

  test("Should return a new character starting at empty attributes.", () => {
    const newCharacter = new Character("Scott Pilgram", "Tank");
    expect(newCharacter.attributes).toEqual({
      strength: 0,
      intelligence: 0,
      agility: 0,
      charisma: 0,
      defense: 0
    });
  });

  test("Should return a new character starting at with base health and mana of 100 each.", () => {
    const newCharacter = new Character("Scooby Doo", "Marksman");
    expect(newCharacter.health).toEqual(100);
    expect(newCharacter.mana).toEqual(100);
  });

  test("Should return a new character starting out with a stick, t-shirt, and pants.", () => {
    const newCharacter = new Character("Link", "Fighter");
    expect(newCharacter.inventory).toEqual({
      weapon:  ["stick"],
      armor: ["t-shirt", "pants"],
      potion: [],
      misc: []
    });
  });

  test("Should return current Character's inventory.", () => {
    const newCharacter = new Character("Link", "Fighter");
    expect(newCharacter.viewInventory()).toEqual({
      weapon:  ["stick"],
      armor: ["t-shirt", "pants"],
      potion: [],
      misc: []
    });
  });

  test("Should return updated inventory with the item added.", () => {
    const newCharacter = new Character("Naruto", "Ninja");
    expect(newCharacter.addToInventory("weapon", "kunai")).toEqual({
      weapon:  ["stick", "kunai"],
      armor: ["t-shirt", "pants"],
      potion: [],
      misc: []
    });
  });

  test("Should return false because the player hasn't gained enough xp to level up.", () => {
    const newCharacter = new Character("Harry Potter", "Mage");
    expect(newCharacter.levelUp()).toEqual(false);
  });

  test("Should return true because the player gained at least 100xp to level up.", () => {
    const newCharacter = new Character("Harry Potter", "Mage");
    newCharacter.xp = 100;
    expect(newCharacter.levelUp()).toEqual(true);
  });
});

describe("Battle", () => {
  test("Should return a battle with a player, a monster they are facing, and a list of all possible monsters.", () => {
    const newBattle = new Battle("Iron Man");
    expect(newBattle.player).toEqual("Iron Man");
    expect(newBattle.monster).toEqual({});
    expect(newBattle.monsterList).toEqual([
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
        rewards: ["long sword", "cooked meat" ],
        moves: {
          swat: 10,
          pound: 15,
          smother: 25,
          winded: 0
        }
      }
    ]);
  });

  test("Should return monster and their greeting when encountered for battle.", () => {
    const newBattle = new Battle("Goku");
    expect(newBattle.randomEncounter()).toEqual(`${newBattle.monster.name}: ${newBattle.monster.greeting}`);
  });
});