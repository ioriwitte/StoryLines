/**
 * Created by marti on 2017-03-25.
 */
angular.module('myApp.myTasks', [])
  .controller('MyTasksController', function ($scope) {

    $scope.projectList = [
      {
        name : "Project1",
        cards : [
          {

          }
        ]
      }
    ]

  });