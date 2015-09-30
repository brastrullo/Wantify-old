'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controller'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    caseInsensitiveMatch : true,
    templateUrl: 'index.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/404', {
    templateUrl: 'index.html'
  })
  .otherwise({redirectTo: '/', caseInsensitiveMatch : true});
}]);

angular
