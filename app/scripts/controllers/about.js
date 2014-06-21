'use strict';

/**
 * @ngdoc function
 * @name meutroappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meutroappApp
 */
angular.module('meutroappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
