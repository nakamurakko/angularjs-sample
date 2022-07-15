'use strict';

// Define the `AngularJSSample` module
angular.module('AngularJSSample', [
  'ngAnimate',
  'ngRoute',
  'homeModule',
])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/home', {
          template: '<home></home>'
        })
        .otherwise('/home');
    }
  ]);

