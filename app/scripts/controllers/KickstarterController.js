'use strict';

angular.module('tadoKickstarterApp')
  .controller('KickstarterController', function ($scope, $interval, KickstarterService) {

    $scope.kickstarter = KickstarterService;

    KickstarterService.update();

    var stop = $interval(function() {
      KickstarterService.update();
    }, 5000);

  });
