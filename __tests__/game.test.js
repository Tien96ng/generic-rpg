import Game from "../src/js/game.js";
import Character from "../src/js/character.js";

describe("Game", () => {
  test("Should return a game with player1 created.", () => {
    const newGame =  new Game("player1");
    expect(newGame.player1).toEqual("player1");
  })
});

describe("Character", () => {
  test("Should return new character with their name and their choosen class.", () => {
    const newCharacter =  new Character("Cloud", "Swordsman");
    expect(newCharacter.name).toEqual("Cloud");
    expect(newCharacter.characterClass).toEqual("Swordsman");
  })
});