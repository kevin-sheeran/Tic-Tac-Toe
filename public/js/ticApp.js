
angular.module('ticApp', [])
  .controller('ticController', [function() {
      var tic = this;
      tic.player1 = "X";
      tic.player2 = "O";
      tic.currentPlayer = "";
      tic.board = [
          {position: 0, value:""},
          {position: 1, value:""},
          {position: 2, value:""},
          {position: 3, value:""},
          {position: 4, value:""},
          {position: 5, value:""},
          {position: 6, value:""},
          {position: 7, value:""},
          {position: 8, value:""}
          ];
          
          
          
      
      
      tic.start = function(){
          console.log('Started tic-tac-toe game.');
          tic.currentPlayer = tic.player1;
          console.log(tic.currentPlayer);
      };
      
      tic.select = function(id){
          
          if (tic.currentPlayer == tic.player1){
              console.log(tic.currentplayer);
              tic.currentPlayer = tic.player2;
          }
          else{
              console.log(tic.currentPlayer);
              tic.currentPlayer = tic.player1;
          }
          
          
      };
  
  }]);




