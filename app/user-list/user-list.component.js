'use strict';

// Register `userList` component, along with its associated controller and template
angular.module('userListModule', [])
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['$scope',
      /**
       *
       * @param {ng.IScope} $scope
       */
      function UserListController($scope) {

        $scope.title = 'UserList';

        $scope.userName = '';

        $scope.users = [];

        /**
         * ユーザーを一覧に追加する。
         *
         * @param {JQuery.Event} $event
         */
        $scope.onAddUser = function ($event) {
          if ($scope.userName == '') {
            return;
          }

          $scope.users.push($scope.userName);
          $scope.userName = '';
        }

      }
    ]
  });
