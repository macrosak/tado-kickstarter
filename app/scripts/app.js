'use strict';

angular
  .module('tadoKickstarterApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/kickstarter.html',
        controller: 'KickstarterController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
