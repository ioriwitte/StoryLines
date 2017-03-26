/**
 * Created by marti on 2017-03-25.
 */
angular.module('myApp.myTasks', [])
  .controller('MyTasksController', function ($scope, Model) {

    Model.authorize();

    $scope.boards = Model.getBoards();

  });