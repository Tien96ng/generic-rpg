import Game from "../src/js/game.js";

describe("Game", () => {
  test("Should return a game with player1 created.", () => {
    const newGame =  new Game("player1");
    expect(newGame.player1).toEqual("player1");
  })
});