(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider"];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/input");

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controllerAs: 'mn',
        controller: 'MainCtl'
      })
      .state('input', {
        url: '/input',
        templateUrl: 'app/input/input.html',
        controllerAs: 'in',
        controller: 'InputCtl'
      })
  }
})();
