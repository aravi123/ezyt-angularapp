'use strict';

/**
 * @ngdoc function
 * @name ezytApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the ezytApp
 */
angular.module('ezytApp')
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  });