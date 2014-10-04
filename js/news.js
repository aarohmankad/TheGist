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
              console.log(article.data.summary);
            });
          }
        };
      }
    };
  });

}).call(this);
