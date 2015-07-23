'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  // Our modules our modules
  'home',
  'admin',
  'goods'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    // admin code
    when('/admin/users',{
          templateUrl: 'modules/admin/views/zarin-adm-user-page.html'
        }).
        when('/admin/shops',{
          templateUrl: 'modules/admin/views/zarin-adm-shops-page.html'
        }).
        when('/admin/statistics',{
          templateUrl: 'modules/admin/views/zarin-adm-stat-page.html'
        }).
        when('/user/backet',{
          templateUrl: 'modules/admin/views/zarin-user-backet-page.html'
        }).
        when('/user/purchases',{
          templateUrl: 'modules/admin/views/zarin-user-all-purchases-page.html'
        }).
        when('/user/profile/edit',{
          templateUrl: 'modules/admin/views/zarin-edit-user-page.html'
        }).
        when('/shop/orders',{
          templateUrl: 'modules/admin/views/zarin-shop-orders-page.html'
        }).
        when('/shop/products',{
          templateUrl: 'modules/admin/views/zarin-shop-products-page.html'
        }).
         when('/shop/profile/edit',{
          templateUrl: 'modules/admin/views/zarin-shop-admin-edit-profile.html'
        }).



      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      // Our roots
      when('/home', {
        templateUrl: 'modules/home/views/main.html'
      }).
      when('/admin', {
        templateUrl: 'modules/admin/views/main.html'
      }).
      when('/goods', {
        templateUrl: 'modules/goods/views/main.html'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
