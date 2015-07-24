admin.controller( 'BucketCtrl', ['$scope', function ( $scope) {
            $scope.deleteProduct = function(index){
            $scope.products.splice(index,1);
            }
            }])