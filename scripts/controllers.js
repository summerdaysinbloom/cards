var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$anchorScroll', '$http', '$timeout',
    function($scope, $location, $anchorScroll, $http, $timeout) {
        console.log('[C] Main');

        $http.get('list.json', { cache: true })
        	.success(function(data) {
        	    $scope.list = data;
        	}).error(function(data, status) {
        	    console.log('error',data);
        	}); 

        $scope.scroll = function(id) {

          if(jQuery('#' + id).length == 1){
              // console.log('main : scrolling ' , jQuery('#' + id).offset().top);
              jQuery('html, body').animate({
                scrollTop:  jQuery('#' + id).position().top
            });
          };

      	};

        $scope.shareTracking = function(share_type) {
            _gaq.push(['_trackEvent', 'Social', 'Share', share_type]); 
        }

    }
])
.controller('ListCtrl',['$scope', '$location', '$anchorScroll', '$http', '$timeout',
	function($scope, $location, $anchorScroll, $http, $timeout) {
		console.log('[C] list');

		$http.get('list.json', { cache: true })
        	.success(function(data) {
            console.log('data',data)
        	    $scope.list = data;
        	}).error(function(data, status) {
        	    console.log('error',data);
        	}); 

        $scope.scroll = function(id){
        	
          if(jQuery('#' + id).length == 1){
        	  	// console.log('list : scrolling ', jQuery('#' + id).offset().top);
        	  	jQuery('html, body').animate({
        	    	scrollTop:  jQuery('#' + id).position().top
        	 	});
        	};
      	}

	}
]);