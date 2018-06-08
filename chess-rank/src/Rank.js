function makeObjectMaker(prototype) {
  return function(obj, name) {
    Object.setPrototypeOf(obj, prototype);
    obj.name = name;
    return obj;
  }
}

var _Rating = {
  setMean: function (mean) {
    this.mean = mean;
  },
  setKFactor: function (kFactor) {
    this.kFactor = kFactor;
  }
}

var _Owner = {
  setCanAddOwner: function (canAdd) {
    this.addOwners = !!canAdd;
  }
}

var _Game = {
  addOwner: function (ownerId) {
    if (!this.users) this.users = {};
    this.owners[ownerId] = {
      addOwners: false
    }
  },
  addPlayer: function (playerId) {
    if (!this.players) this.players = {};
    this.players[playerId] = {
      rating: {
        mean: 1500,
        kFactor: 24
      }
    };
  },
  toString: function () {
    return this.name;
  }
}

var Game = makeObjectMaker(_Game);
var Owner = makeObjectMaker(_Owner);
var Rating = makeObjectMaker(_Rating);

export default {
  Game: Game
};
