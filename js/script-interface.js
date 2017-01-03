var Simon = require('./../js/script.js').simonModule;

$(document).ready(function() {
  var game = new Simon();
  $('.panel').on('click', function() {
    var clicked = $(this).attr("value");
    var clickedPanel = game.UserClicks(clicked);
    console.log(clicked);
  });
  $('#play').on('click', function() {

  });
});
