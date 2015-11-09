'use strict';

/**
 * @ngdoc overview
 * @name chatroomApp
 * @description
 * # chatroomApp
 *
 * Main module of the application.
 */
angular
  .module('chatroomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
}])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
