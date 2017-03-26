/**
 * Created by marti on 2017-03-26.
 */

app.factory('Model', function ($resource) {

  var loggedIn = false;
  var boardsLoaded = false;
  var boards;

  //Authorize to the trello api
  var authenticationSuccess = function() {
    console.log('Successful authentication');
    loggedIn = true;
  };
  var authenticationFailure = function() { console.log('Failed authentication'); };

  this.authorize = function() {

    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true' },
      expiration: 'never',
      success: authenticationSuccess,
      error: authenticationFailure
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

  this.getBoards = function (cb) {
    //Check if boards are not loaded
    if(!boardsLoaded){
      loadBoards(cb);
    }else{
      cb(boards);
    }
  };

  this.isLoggedIn = function () {
    return loggedIn;
  };

  this.boardsLoaded = function () {
    return boardsLoaded;
  };

  return this;

});
