app = angular.module 'redditnews', []

app.controller 'rootControl', ->
	return

app.directive 'newsList', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/news-list.html'
	controller: ($http, $scope) ->
		getFavicons = ->
		    angular.forEach $scope.news, (article, key) ->
		    	article.data.favicon = 'http://cors-anywhere.herokuapp.com/http://www.google.com/s2/favicons?domain=' + article.data.url
			    return
		    return
		
		$http.get('http://www.reddit.com/r/news.json').success (resp_data) ->
			$scope.news = resp_data.data.children
			getFavicons()
			return
		$scope.showSummary = (article) ->
			if(!article.data.summary)
				$http.get('http://cors-anywhere.herokuapp.com/http://clipped.me/algorithm/clippedapi.php?url=' + article.data.url).success (resp) ->
					article.data.summary = ""
					for i in resp.summary
						article.data.summary += " " + i
					return
				return
		return
