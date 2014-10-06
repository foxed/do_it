'use strict';

/**
 * @ngdoc function
 * @name doItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doItApp
 */
angular.module('doItApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
