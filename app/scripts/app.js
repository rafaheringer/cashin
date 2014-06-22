'use strict';

/**
 * @ngdoc overview
 * @name cashinApp
 * @description
 * # cashinApp
 *
 * Main module of the application.
 */
angular
  .module('cashinApp', [
    'ngAnimate',
    'directive.g+signin', 
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
