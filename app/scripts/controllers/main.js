'use strict';

/**
 * @ngdoc function
 * @name ezytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ezytApp
 */

angular.module('ezytApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("../../database/menu.json").then(function(response){
    	//var js=JSON.parse(response);
    	// console.log(js.name[1]);
    	$scope.response=response.data;
    });
  });
 
