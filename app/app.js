'use strict';

// Define the `AngularJSSample` module
angular.module('AngularJSSample', [
  'ngRoute',
  'homeModule',
  'userListModule',
])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/home', {
          template: '<home></home>'
        })
        .when('/user-list', {
          template: '<user-list></user-list>'
        })
        .otherwise('/home');
    }
  ]);

