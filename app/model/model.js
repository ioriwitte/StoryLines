/**
 * Created by marti on 2017-03-26.
 */

app.factory('Model', function ($resource) {

  var loggedIn = false;
  var boardsLoaded = false;
  var cardsLoaded = false;
  var boards;
  var cards;

  //Authorize to the trello api
  this.authorize = function() {

    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true' },
      expiration: 'never',
      success: function() {
        console.log('Successful authentication');
        loggedIn = true;
      },
      error: function() { console.log('Failed authentication'); }
    });

    //loadBoards();
  };

  //TODO: Assign "boards" variable by callback function
  var loadBoards = function (cb) {

    // Get all of the information about the boards you have access to
    var success = function(data) {
      boards = data;
      cb(boards);
      boardsLoaded = true;
      //console.log(data);
    };
    var error = function(errorMsg) {
      console.log(errorMsg);
    };
    Trello.get('/member/me/boards', success, error);

  };

  var loadAllCards = function(){

    // Get all of the information about the boards you have access to
    var success = function(data) {
      cards = data;
      cb(cards);
      cardsLoaded = true;
      //console.log(data);
    };
    var error = function(errorMsg) {
      console.log(errorMsg);
    };
    Trello.get('/member/me/cards', success, error);

  };

  this.getBoards = function (cb) {
    //Check if boards are not loaded
    if(!boardsLoaded){
      loadBoards(cb);
    }else{
      cb(boards);
    }
  };


  this.getCards = function (boardId, cb) {

  };

  this.isLoggedIn = function () {
    return loggedIn;
  };

  this.boardsLoaded = function () {
    return boardsLoaded;
  };

  return this;

});
