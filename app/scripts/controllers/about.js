'use strict';

/**
 * @ngdoc function
 * @name doItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the doItApp
 */
angular.module('doItApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addThings = function(thing) {
     $scope.awesomeThings.push(thing);
    };
  });
