'use strict';

// Register `home` component, along with its associated controller and template
angular.module('homeModule', [])
  .component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$scope',
      /**
       *
       * @param {ng.IScope} $scope
       */
      function HomeController($scope) {

        $scope.title = 'Home';

        $scope.message = 'こんにちは';

        /**
         * メッセージを変更する。
         *
         * @param {JQuery.Event} $event
         */
        $scope.onChangeMessage = function ($event) {
          $scope.message = 'こんばんは';
        }

      }
    ]
  });
