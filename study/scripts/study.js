(function(window) {
  'use strict';

  var rootUrl;

  if (typeof(DEVELOPMENT) === 'undefined') {
    rootUrl = '//vdziubak.com/integratedCommentingStudy/';
  } else {
    rootUrl = '//localhost:3000/';
  }

  var app = angular.module('study', ['logger']);

  app.controller('studyController', function(LoggerService, $scope, $window, $timeout) {
    $scope.data = LoggerService.getData();

    $scope.submit = function(e) {
      var valid = $scope.data.participantId && $scope.data.interface &&
                  ($scope.data.content === 'training' || $scope.data.clutter);

      if (valid) {
        LoggerService.setData({
          participantId: $scope.data.participantId,
          interface: $scope.data.interface,
          content: $scope.data.content,
          clutter: $scope.data.clutter,
        });
        LoggerService.log('session started');

        var urlParams = ['content=' + $scope.data.content, 'clutter=' + $scope.data.clutter],
            urlPath = '#/' + $scope.data.interface;

        $window.location.href = rootUrl + urlPath + '?' + urlParams.join('&');
      } else {
        alert('please, set all the values first');
      }
    };
  });

  window.study = app;
})(window);
