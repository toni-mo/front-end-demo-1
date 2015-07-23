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
