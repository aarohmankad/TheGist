app = angular.module 'redditnews', []

app.directive 'newsList', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/news-list.html'
	controller: ($scope, $http) ->
		searchTerm = ''
		$scope.articles = $http.get 'http://www.reddit.com/r/' + searchTerm + '.json'
		$scope.changeSearch = (e, term) ->
			return if e.keyCode != 13

			searchTerm = term
			return
		return
	controllerAs: 'newsList'