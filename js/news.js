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
        var getFavicons;
        getFavicons = function() {
          angular.forEach($scope.news, function(article, key) {
            article.data.favicon = 'http://cors-anywhere.herokuapp.com/http://www.google.com/s2/favicons?domain=' + article.data.url;
          });
        };
        $http.get('http://www.reddit.com/r/news.json').success(function(resp_data) {
          $scope.news = resp_data.data.children;
          getFavicons();
        });
        $scope.showSummary = function(article) {
          if (!article.data.summary) {
            $http.get('http://cors-anywhere.herokuapp.com/http://clipped.me/algorithm/clippedapi.php?url=' + article.data.url).success(function(resp) {
              var i, _i, _len, _ref;
              article.data.summary = "";
              _ref = resp.summary;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                article.data.summary += " " + i;
              }
            });
          }
        };
      }
    };
  });

}).call(this);
