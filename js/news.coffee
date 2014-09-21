app = angular.module 'redditnews', []

app.controller 'rootControl', ->
	return

app.directive 'newsList', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/news-list.html'
	controller: ($http, $scope) ->
		$http.get('http://www.reddit.com/r/news.json').success (resp_data) ->
			$scope.news = resp_data.data.children;
			return
		return