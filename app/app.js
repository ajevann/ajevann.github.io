var ajevannApp = angular.module('ajevannApp', [
  'ngRoute',
  'ngSanitize',
  'ajevannControllers'
]);

ajevannApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/projects-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('#', {
        templateUrl: 'views/projects-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('/projects', {
        templateUrl: 'views/projects-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('/css-viewer', {
        templateUrl: 'views/projects/css-viewer.html',
      }).
      when('/emailip', {
        templateUrl: 'views/projects/email-ip.html',
      }).
      when('/euler', {
        templateUrl: 'views/projects/euler.html',
      }).
      when('/project/:projectId', {
        templateUrl: 'views/projects/{{projectId}}.html',
        controller: 'ProjectDetailCtrl'
      }).
      when('/about', {
        templateUrl: 'views/about.html'
      }).
      when('/resume', {
        templateUrl: 'views/resume.html'
      }).
      when('/404', {
        templateUrl: 'views/404.html'
      }).
      when('/landing', {
        templateUrl: 'views/landing.html'
      }).
      otherwise({ /*replace with 404 later*/
        redirectTo: '404'
      });
  }]);