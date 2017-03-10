
var gameStarted = false;
var player;
var computer;
var board = { "fieldA1": false, "fieldA2": false, "fieldA3": false, "fieldB1": false, "fieldB2": false, "fieldB3": false, "fieldC1": false, "fieldC2": false, "fieldC3": false}
var whoseTurnIsiT = false; // false => player, true => computer


function startGame() {
  gameStarted = true;
  whoseTurnIsiT = true;
  console.log("Game has started. Player selected: "+player+" . Computer plays "+computer);
}

function setPlayerO() {
  if (gameStarted === false) {
    player = "O";
    computer = "X";
    startGame();
  }
}

function setPlayerX() {
  if (gameStarted === false) {
    player = "X";
    computer = "O";
    startGame();
  }
}

function myFunction(field, playerTurn) {
  if (board[field] === false) {
    $("#"+field).html(playerTurn);
    board[field] = true;
    console.log("Board "+field+" is now "+board[field]);
    checkWin();
    whoseTurnIsiT = true;
  }
}

function myFunctionA1() {
  var field = "fieldA1";
  myFunction(field, player);
}

function myFunctionA2() {
  var field = "fieldA2";
  myFunction(field, player);
}

function myFunctionA3() {
  var field = "fieldA3";
  myFunction(field, player);
}

function myFunctionB1() {
  var field = "fieldB1";
  myFunction(field, player);
}

function myFunctionB2() {
  var field = "fieldB2";
  myFunction(field, player);
}

function myFunctionB3() {
  var field = "fieldB3";
  myFunction(field, player);
}

function myFunctionC1() {
  var field = "fieldC1";
  myFunction(field, player);
}

function myFunctionC2() {
  var field = "fieldC2";
  myFunction(field, player);
}

function myFunctionC3() {
  var field = "fieldC3";
  myFunction(field, player);
}

function checkWin() {
  //check if player of computer wins
}

function nextAvailable() {
  for (var key in board) {
    if (board[key] === false) {
      console.log(key + " -> " + board[key]);
      return key;
  }
}
}

$(document).ready(function(){
  var gameplay = setInterval( function() {
    if (gameStarted === true && whoseTurnIsiT === true) {
      var nextField = nextAvailable();
      myFunction(nextField, computer);
      console.log(board);
      whoseTurnIsiT = false;
    } else if (gameStarted === true && whoseTurnIsiT === false) {

    }


  }, 2000);

}, 1000);
