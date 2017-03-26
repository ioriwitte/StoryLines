/**
 * Created by marti on 2017-03-25.
 */
angular.module('myApp.myTasks', [])
  .controller('MyTasksController', function ($scope, Model) {

    //TODO: Move this to where it only runs once
    if(!Model.isLoggedIn()){
      Model.authorize();
    }

    //TODO: Wait for data to load in model
    Model.loadData(function () {
      $scope.boards = Model.getBoards();
      /*
      $scope.cards = function (boardId) {
        return Model.getCards(boardId).slice(0,5);
      };
*/
      //TODO: Figure out why this is needed for it to work
      $scope.$apply();

    });


  });
