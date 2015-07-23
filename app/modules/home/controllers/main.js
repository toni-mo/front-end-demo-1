home
 	.controller('MainCtrl', ['$scope', function($scope){
		var self = this;

		self.link = "../images/clothing.jpg";

		// self.styleObj={'background-image': 'url(../images/clothing.jpg)'};

		self.setImage = function(link){
			return{
				'background-image': 'url('+link+')'
			}
		}

		$scope.categories = [
			{
				name: 'Sport',
				image: '../images/sport.jpg',
				subcategories: [
					{name: 'water sport'},
					{name: 'mounting'},
					{name: 'ball sports'},
					{name: 'running'},
					{name: 'cycling'},
					{name: 'fishing'},
					{name: 'Fitness & Bodybuilding'},
					{name: 'Hunting'}
				]
			},
			{
				name: 'Clothing',
				image: '../images/clothing.jpg',
				subcategories: [
					{name: 'mens cloth'},
					{name: 'woman cloth'},
					{name: 'child cloth'}
				]
			},
			{
				name: 'Phones & Accessories',
				subcategories: [
					{name: 'With 1 SIM'},
					{name: 'With 2 SIM\'s' },
					{name: 'Display 4.7'},
					{name: 'Display 5.0'},
					{name: '8 Cores'},
					{name: '4 Cores'}
				]
			},
			{
				name: 'Electronics',
				subcategories: [
					{name: 'Headphones'},
					{name: 'Dynamics'},
					{name: 'Accumulators'},
					{name: 'Digital Cables'},
					{name: 'Cameras'}
				]
			},
			{
				name: 'Health & Beauty'
			},
			{
				name: 'Automobiles & motorcycles'
			},
			{
				name: 'Home Improvement'
			},
			{
				name: 'Bags & Shoes'
			},
			{
				name: 'Home & Garden'
			}
		];

		// alert category subcategory
		self.categoryAlert = function(subcategory){
			alert(subcategory);
		};
	}]);