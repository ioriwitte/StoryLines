/**
 * Created by marti on 2017-03-26.
 */

app.factory('Model', function ($resource) {
  var loggedIn = false;
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

    loadBoards();
  };
  //TODO: Assign "boards" variable by callback function
  var loadBoards = function () {

    // Get all of the information about the boards you have access to
    var success = function(data) {
      boards = data;
      console.log(data);
    };
    var error = function(errorMsg) {
      console.log(errorMsg);
    };
    Trello.get('/member/me/boards', success, error);

  };

  this.getBoards = function (cb) {
    if(boards == undefined){
      console.error("Error: Boards not loaded yet");
      return [];
    }else{
      return boards;
    }
  };

  this.isLoggedIn = function () {
    return loggedIn;
  };

  return this;

});
