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
      when('/home/:categoryId', {
        templateUrl: 'modules/home/views/chosen.html'
      }).
      when('/admin', {
        templateUrl: 'modules/admin/views/main.html'
      }).
      when('/character', {
        templateUrl: 'modules/goods/views/nazar-characteristic-of-product.html'
      }).
      when('/logIn', {
        templateUrl: 'modules/goods/views/nazar-login-and-registration-page.html'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
