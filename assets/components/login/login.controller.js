'use strict';

(function(casModule) {

  /**
   * Defines controller of the login component.
   */
  function LoginController($scope, $location, $http) {
    var urlParams = $location.search();

    Object.defineProperties(this, {

      /**
       * The URL of the service to redirect to.
       *
       * @property service
       * @type String
       */
      service: {
        value: urlParams.service,
        writable: true
      }

    });
  }

  casModule.controller('LoginController', LoginController);
  LoginController.$inject = ['$scope', '$location', '$http'];

})(angular.module('cas'));
