(function() {
    var app = angular.module('drupalapp', ['ngSanitize']);
    
    app.controller('DrupalController', function($scope, $http) {
    	this.nodes = [];
    	
    	this.node = {};
    	
    	this.showNode = function(nodeID) {
    		$http.get('/api/node/' + nodeID).then(function(res) {
    			$scope.drupal.node = res.data;
    			$('#node-modal').foundation('reveal', 'open');
    		});
    	}
    	
    	$http.get('/api/node').then(function(res) {
    		$scope.drupal.nodes = res.data;
    	});
    });
})();