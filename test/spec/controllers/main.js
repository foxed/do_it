'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('doItApp'));

  var MainCtrl,
  scope;

// Initialize the controller and a mock scope
beforeEach(inject(function ($controller, $rootScope) {
  scope = $rootScope.$new();
  MainCtrl = $controller('MainCtrl', {
    $scope: scope
  });
}));

it('addTodo should add the value of todoText to the todo array', function () {
    var todoText = 'Take out the Garbage';
    scope.todoText = todoText;
    scope.addTodo();

    var result = {text: todoText, done: false};
    expect(scope.todos).toContain(result);
  });

it('removeTodo should remove the value of todoText from the todo array', function () {
    var todoText = 'Finished todo item';
    scope.todoText = todoText;
    scope.addTodo();
    var result = {text: todoText, done: false};
    scope.removeTodo();

    expect(result.done).toEqual(false);
  });
});
