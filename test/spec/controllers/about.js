'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('doItApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should accept another object to awesomeThings', function () {
    scope.addThings("huzzah");
    expect(scope.awesomeThings.length).toBe(4);
    expect(scope.awesomeThings).toContain("huzzah");
  });
});
