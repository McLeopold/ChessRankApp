var _Game = {
  addOwner: function (ownerId) {
    if (!this.users) this.users = {}
    this.users[ownerId] = {
      rating: {}
    }
  }
}

function Game(game) {
  Object.setPrototypeOf(game, _Game)
  return game;
}

export default {
  Game: Game
};
