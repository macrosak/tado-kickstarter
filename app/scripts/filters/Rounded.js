'use strict';

angular.module('tadoKickstarterApp')
  .filter('rounded', function() {
    return function(input) {
      input = input || '';

      return Math.round(input);
    };
  })