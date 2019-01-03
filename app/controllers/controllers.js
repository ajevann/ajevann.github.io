var ajevannControllers = angular.module('ajevannControllers', []);

ajevannControllers.controller('ProjectListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('assets/js/projects.json').success(function(data) {
      
      $scope.projects = data;

      var i = 1;
      $scope.projects.forEach(project => {
        project.order = i++;
      });

    });
  }
]);