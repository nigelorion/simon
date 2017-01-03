var Simon = require('./../js/script.js').simonModule;

$(document).ready(function(event) {
  $('.panel').on('click', function() {
    var clicked = $(this).attr("value");
    var game = new Simon();
    var clickedPanel = game.UserClicks(clicked);
    console.log(clicked);
  });
  $('#play').on('click', function() {

  });
});
