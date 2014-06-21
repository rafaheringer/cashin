'use strict';

/**
 * @ngdoc function
 * @name meutroappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meutroappApp
 */
angular.module('meutroappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
