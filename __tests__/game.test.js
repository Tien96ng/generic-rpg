import Game from "../src/js/game.js";
import Character from "../src/js/character.js";

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
});