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
    $scope.todos = [
      {text: 'refactor scss for layout redesign', done: true},
      {text: 'learn angular', done: false},
      {text: 'chill at terrible labs', done: true}];

   $scope.addTodo = function() {
     $scope.todos.push({text: $scope.todoText, done: false});
     $scope.todoText = '';
   };
  });
