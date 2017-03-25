'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.myTasks',
  'myApp.plannerHub',
  'myApp.projectPage',
  'myApp.storiesStatus',
  'myApp.userScreen',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when("/login", {
      templateUrl: "login/login.html",
      controller: "loginController"
    })
    .when("/myTasks", {
      templateUrl: "my-tasks/my-tasks.html",
      controller: "myTasksController"
    })
    .when("/plannerHub", {
      templateUrl: "planner-hub/planner-hub.html",
      controller: "plannerHubController"
    })
    .when("/projectPage", {
      templateUrl: "project-page/project-page.html",
      controller: "projectPageController"
    })
    .when("/storiesStatus", {
      templateUrl: "stories-status/stories-status.html",
      controller: "storiesStatusController"
    })
    .when("/userScreen", {
      templateUrl: "user-screen/user-screen.html",
      controller: "userScreenController"
    })
    .otherwise({redirectTo: '/view1'});
}]);
