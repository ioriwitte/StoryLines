/**
 * Created by marti on 2017-03-25.
 */
angular.module('myApp.myTasks', [])
  .controller('MyTasksController', function ($scope, Model) {

    Model.authorize();

    $scope.exampleProjects = [
        {
        "id": "4eea4ffc91e31d1746000046",
        "name": "Example Board",
        "desc": "This board is used in the API examples",
        "lists": [{
          "id": "4eea4ffc91e31d174600004a",
          "name": "To Do Soon"
        }, {
          "id": "4eea4ffc91e31d174600004b",
          "name": "Doing"
        }, {
          "id": "4eea4ffc91e31d174600004c",
          "name": "Done"
        }]
      }
    ]
  });