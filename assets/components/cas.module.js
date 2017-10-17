'use strict';

/**
 * Defines the CAS application module.
 */
(function() {

  angular.module('cas', ['ngRoute']);
  var casModule = angular.module('cas');

  casModule.config(['$locationProvider', '$logProvider', function($locationProvider, $logProvider) {
    $logProvider.debugEnabled(false);
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
  }]);

  casModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'components/login/login.html',
      controller: 'LoginController'
    }).otherwise('/login');
  }]);

})();
