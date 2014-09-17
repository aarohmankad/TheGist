app = angular.module 'redditnews', []

app.controller 'rootControl', ->
	return

app.directive 'newsView', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/news-view.html'
	controller: () ->
		return

app.directive 'filterButtons', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/filter-buttons.html'
	controller: () ->
		return

app.directive 'newsList', ->
	replace: true
	restrict: 'E'
	templateUrl: '../views/news-list.html'
	controller: () ->
		return