app = angular.module 'redditnews', []

app.controller 'rootControl', ->
	return

app.directive 'newsList', ->
	replace: true
	restrict: 'E'
	templateUrl: '/views/news-list.html'
	controller: ($http, $scope) ->
		$http.get('http://www.reddit.com/r/news.json').success (resp_data) ->
			$scope.news = resp_data.data.children
			return

		$scope.showSummary = (article) ->
			if(!article.data.summary)
				$http.get('http://cors-anywhere.herokuapp.com/http://clipped.me/algorithm/clippedapi.php?url=' + article.data.url).success (resp) ->
					article.data.summary = ""
					for i in resp.summary
						article.data.summary += " " + i
					console.log article.data.summary
					return
				return
		return