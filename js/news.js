(function() {
  var app;

  app = angular.module('redditnews', []);

  app.controller('rootControl', function() {});

  app.directive('newsList', function() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: '../views/news-list.html',
      controller: function($http, $scope) {
        $http.get('http://www.reddit.com/r/news.json').success(function(resp_data) {
          $scope.news = resp_data.data.children;
        });
      }
    };
  });

}).call(this);
