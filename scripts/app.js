'use strict';

/* App Module */
var app = angular.module('jamApp', [
    'ngRoute',
    'ngControllers',
    'ngFilters'
]);

app.run(['$location', '$rootScope', '$timeout', '$routeParams', 
    function($location, $rootScope, $timeout, $routeParams, $templateCache) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            console.log('app')
            // $templateCache.put('templateId.html', 'This is the content of the template');

            // console.log($templateCache,'///');
            // when change route, page always goes top (jquery attached)
            // $(window).scrollTop(0);
            
            // metadata
            // $rootScope.title = current.$$route.title;
            // $rootScope.keywords = current.$$route.keywords;
            // $rootScope.description = current.$$route.description;
        });
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
	    .when('/', {
            templateUrl: 'views/main.html',
            title: '',
            keywords: '',
            description: ''
         })
	    .otherwise({
         	redirectTo: '/'
         });
    }
]);