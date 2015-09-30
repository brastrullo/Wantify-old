'use strict';

angular.module('myApp.controller', [])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.greet="Great Products!";
  $http.get('products.json').then(function(response) {
    $scope.products = response.data;
  });
}])