(function() {
  var app;

  app = angular.module('redditnews', []);

  app.directive('newsList', function() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: '../views/news-list.html',
      controller: function($scope, $http) {
        var searchTerm;
        searchTerm = '';
        $scope.articles = $http.get('http://www.reddit.com/r/' + searchTerm + '.json');
        $scope.changeSearch = function(e, term) {
          if (e.keyCode !== 13) {
            return;
          }
          searchTerm = term;
        };
      },
      controllerAs: 'newsList'
    };
  });

}).call(this);
