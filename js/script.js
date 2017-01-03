function Game(game) {
  this.game = game;
}

Game.prototype.UserClicks = function (clickedPanel) {
  var clicks = [];
  clicks.push(clickedPanel);
  console.log(clicks);
  return clicks;

};



exports.simonModule = Game;
