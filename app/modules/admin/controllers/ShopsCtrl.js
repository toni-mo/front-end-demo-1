admin.controller('ShopsCtrl', ['$scope','$http',function ( $scope, $http) {
            $http.get('modules/admin/json/shops.json').then(function(response){
            $scope.shops = response.data;
            });
            $scope.changeStatusBlocked = function(index){
            $scope.shops[index].status = "blocked";
            };
            $scope.changeStatusActive = function(index){
            $scope.shops[index].status = "active";
            };
            $scope.deleteShop = function(index){
            $scope.shops.splice(index,1);
            }
            $scope.btnBlockName= "block";
            $scope.showMessage = function(status){
                    if(status=="active")
                    return "block"
                    else
                    return "unblock";
                    }
            $scope.changeButtonName=function(index){
            if($scope.shops[index].status=='blocked'){
                    $scope.btnBlockName = 'unblock';
                    $scope.shops[index].status = "active";
                    }
                    else {
                    $scope.btnBlockName = 'block';
                    $scope.shops[index].status = "blocked";
                            }
                    }
            $scope.getClass = function(status){
                    if(status=="blocked") 
                    return{
                    'fa-unlock': true
                    }
                    else 
                    return{
                    'fa-lock': true                  
                    };
            }
            $scope.getRowStatus = function(status){
                    if(status=="blocked") 
                    return{
                    'adm-PR1': true
                    }
                    else 
                    return{
                    'adm-PR1': false                
                    };}
              } ] )
              // disable zoom
              // $(document).ready(function () {
              // $(document).keydown(function (event) {
              // if (event.ctrlKey == true && (event.which == '107' || event.which == '109' || event.which == '187' || event.which == '189'))
              // {
              // event.preventDefault();
              // }
              // });
              // $(window).bind('mousewheel DOMMouseScroll', function (event) {
              //       if (event.ctrlKey == true) {
              //       event.preventDefault();
              //  }
              // });
              // })