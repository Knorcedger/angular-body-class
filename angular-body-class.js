/**
 * @description Adds the route's controller name as a class to the element it is applied
 * @version 1.0.0
 **/
var bodyClass = angular.module('bodyClass', []);

bodyClass.directive('bodyClass', function($timeout, $rootScope) {
	return {
		restrict: 'A',
		link: function(scope, element) {
			$rootScope.$on('$routeChangeSuccess', function(event, data) {
				element.attr('class', '');
				element.addClass(data.$$route && data.$$route.controller);
			});
		}
	};
});
