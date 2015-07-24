home
	.factory('CategoryService', ['$resource', function($resource){
		return $resource('modules/home/json/:categoryId.json');


		  // return $resource('phones/:phoneId.json', {}, {
    //   query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    // });

	}]);
	