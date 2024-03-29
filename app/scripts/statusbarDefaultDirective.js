angular.module('comments')
  .directive('statusbarDefault', function(ContextualCommentsService, GeneralCommentsService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/statusbarDefault.html',
      controller: function($scope) {
        $scope.generalStats = GeneralCommentsService.stats();
        $scope.contextualStats = ContextualCommentsService.stats();
      }
    };
  });