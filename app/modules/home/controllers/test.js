home
	.controller('TestCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$scope.testVar = "We're using a Test controller";

		// $http.get('modules/home/json/categories.json',{categoryId: $routeParams.categoryId}).then(function(response){
		// 	$scope.category = response.data;
		// });

		$http.get({
			method: 'GET',
			url: 'modules/home/json/categories.json',
			params: {
				categoryId: $routeParams.categoryId
			}
		}).then(function(response){
			$scope.category = response.data;
		});
	}]);