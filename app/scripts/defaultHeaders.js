'use strict';

angular.module('chatroomApp').factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': '1eKDG5J4kYK4zvDmTb1gAqWlzrS0zRnfIa0veUT6', 'X-Parse-REST-API-Key': 'K1D1JXfsIZO0mr2SuqWOGI5wKxPWWxQpDM8DbeTU'};
      return config;
    }
  };
});
