'use strict';

/* Filters */

angular.module('ngFilters', [])
.filter('middot', function() {
	return function(str) {
		var str = str;
		var res = str.replace(/-/g, "·");
		return res;
	}
})
.filter('link', function() {
	return function(str) {
		if(str==undefined) {
			console.log('un');
			return 'un';
		} else {
			return str;
		}
		return str;
	}
})
.filter('none', function() {
	return function(str) {

		if (str == '無' ) {
			return '(無)';
		}
		else return str;
	}
});