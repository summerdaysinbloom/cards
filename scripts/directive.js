'use strict';

var exxonDirectives = angular.module('exxonDirectives', []);
 
exxonDirectives
.directive('shareTwitter', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            tracking: '&'
        },
        controller: function ($scope, env, $location, $route, $attrs) {

            console.log

            $scope.openWindow = function(share_type, pageURL) {                
                // console.log('ga:eventname : ', share_type);
                var targetWin = window.open (pageURL, '_blank');                
                _gaq.push(['_trackEvent', 'Social', 'Share', share_type]); 
            }
           
            $scope.gaEventname = $route.current.$$route.originalPath;
            $scope.currentPage = $route.current.$$route.originalPath;
         
            // twitter info
            $scope.twitterbitly = env.pages[$scope.currentPage].social.twitter.bitly;
            $scope.twitterdesc = env.pages[$scope.currentPage].social.twitter.text;
            
            // when it has subsection
            if($attrs.subsection) {
               $scope.gaEventname = $attrs.subsection;// twitter info
               // twitter info
               $scope.twitterbitly = env.pages[$scope.currentPage].sections[$attrs.subsection].social.twitter.bitly;
               $scope.twitterdesc = env.pages[$scope.currentPage].sections[$attrs.subsection].social.twitter.text;
            }

            $scope.text = "https://twitter.com/intent/tweet?text=" + $scope.twitterdesc + ' ' + $scope.twitterbitly;
            
            // console.log('1 : gaEventname ',$scope.gaEventname);
            console.log('1 : currentPage', $scope.currentPage);
            // console.log('1 : twitterbitly', $scope.twitterbitly);
            // console.log('1 : twitterdesc', $scope.twitterdesc);    
            // console.log('1 : text', $scope.text); 

        },
        template: '<a class=\"share_icon\" ng-click="openWindow(gaEventname, text)" ><img src={{icon}} /></a>'

    };
});