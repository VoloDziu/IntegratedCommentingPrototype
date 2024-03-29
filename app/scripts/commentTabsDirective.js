angular.module('comments')
  .directive('commentTabs', function(ContextualCommentsService, GeneralCommentsService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/commentTabs.html',
      controller: function($scope) {
        if (!$scope.contextualStats) {
          $scope.contextualStats = ContextualCommentsService.stats();
        }

        if (!$scope.generalStas) {
          $scope.generalStats = GeneralCommentsService.stats();
        }
      }
    };
  });