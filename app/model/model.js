/**
 * Created by marti on 2017-03-26.
 */

app.factory('Model', function ($resource) {
  //Authorize to the trello api
  var authenticationSuccess = function() { console.log('Successful authentication'); };
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


    // Get all of the information about the boards you have access to

    var success = function(successMsg) {
      console.log(successMsg);
    };

    var error = function(errorMsg) {
      console.log(errorMsg);
    };

    Trello.get('/member/me/boards', success, error);

  };

  return this;

});
