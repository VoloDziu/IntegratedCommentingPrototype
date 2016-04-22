(function(window) {
  'use strict';

  var app = angular.module('comments', ['logger', 'truncate', 'app-templates', 'monospaced.elastic', 'ngRoute']);
  window.app = app;

  app.factory('rootPrefix', function() {
    if (typeof(DEVELOPMENT) === 'undefined') {
      return '/switter';
    } else {
      return '';
    }
  });

  var constructPath = function(interfaceType, urlParams) {
    var path = 'templates/' + interfaceType + '-';

    if (urlParams.session === 'training'){
      path += 'training';
    } else {
      path += urlParams.content;

      if (urlParams.clutter === 'on') {
        path += '_clutter';
      }
    }

    path += '.html';

    return path;
  };

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/integrated', {
          controller: 'integratedController',
          templateUrl: function(urlParams){
            return constructPath('integrated', urlParams);
          }
        })
        .when('/heatmap', {
          controller: 'heatmapController',
          templateUrl: function(urlParams){
            return constructPath('heatmap', urlParams);
          }
        })
        .when('/paragraph', {
          controller: 'paragraphController',
          templateUrl: function(urlParams){
            return constructPath('paragraph', urlParams);
          }
        });
   }]);
})(window);
