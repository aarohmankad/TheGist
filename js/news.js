(function() {
  var app;

  app = angular.module('redditnews', []);

  app.controller('rootControl', function() {});

  app.directive('newsView', function() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: '../views/news-view.html',
      controller: function() {}
    };
  });

  app.directive('filterButtons', function() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: '../views/filter-buttons.html',
      controller: function() {}
    };
  });

  app.directive('newsList', function() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: '../views/news-list.html',
      controller: function() {}
    };
  });

}).call(this);
