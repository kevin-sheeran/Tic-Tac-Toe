
angular.module('ticApp', [])
  .controller('ticController', [function() {
      var tic = this;
      tic.player1 = "X";
      tic.player2 = "O";
      
      tic.start = function(){
          console.log('Started tic-tac-toe game.')
      };
  
  }]);




