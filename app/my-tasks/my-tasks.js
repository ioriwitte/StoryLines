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
    $scope.boards = Model.getBoards();

  });