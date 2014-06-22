'use strict';

/**
 * @ngdoc function
 * @name cashinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cashinApp
 */
angular.module('cashinApp')
	//Google + Sign
 	.controller('ExampleCtrl', function ($scope) {
 		//On login success
 		$scope.$on('event:google-plus-signin-success', function () {
 			console.log('Login success!');
 		});

 		//On Failure
 		$scope.$on('event:google-plus-signin-failure', function () {
 			console.log('Fail');
 		});
 	})

	.controller('MainCtrl', function ($scope) {
    	$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
  });
