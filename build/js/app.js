(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/script.js":1}]},{},[2]);
