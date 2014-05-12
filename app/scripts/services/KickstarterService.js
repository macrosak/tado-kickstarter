'use strict';

angular.module('tadoKickstarterApp')
  .factory('KickstarterService', function ($http) {
    var ENDPOINT = "https://d2oher2uhvl0ur.cloudfront.net/projects/tado/tado-cooling-intelligent-a-c-control/stats.json?v=1";

    var Service = function () {
      var instance = this;
      this.update = function () {
        $http.get(ENDPOINT).success(function(data) {
          angular.extend(instance, data);
        })
      };
    };

    return new Service();
  });
