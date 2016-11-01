'use strict';

describe('Controller: MyctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ezytApp'));

  var MyctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyctrlCtrl = $controller('MyctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyctrlCtrl.awesomeThings.length).toBe(3);
  });
});
