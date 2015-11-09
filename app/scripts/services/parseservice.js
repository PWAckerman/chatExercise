'use strict';

angular.module('chatroomApp')
  .service('parseService', ['$http', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getChatrooms = function() {
      return $http({
          method: 'GET',
          url: 'https://api.parse.com/1/classes/chatroom?order=-createdAt'
        })
        .then(function(result) {
            console.log(result.data.results);
            return(result.data.results)
          },
          function(error) {
            console.log(error);
          });
    };
    this.newRoom = function(name, createdBy) {
      return $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/chatroom/',
          data: {
              name: name,
              createdBy: createdBy
          }
        })
        .then(function(result) {
           console.log(result);
          },
          function(error) {
            console.log(error);
          });
    };
    this.getMessages = function(roomId){
      return $http.get('https://api.parse.com/1/classes/messages/',
         {
           params:  {
                       where: '{"chatroom":"' + roomId + '"}',
                      //  limit: 2,
                       // count: 1
                       // include: "something"
                    }
         }).then(function(result) {
            console.log(result.data.results);
            return result.data.results;
           },
           function(error) {
             console.log(error);
        });
    }
    this.postMessage = function(message, roomId, userId) {
      return $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/messages/',
          data: {
              body: message,
              author: userId,
              chatroom: roomId
          }
        })
        .then(function(result) {
           console.log(result);
          },
          function(error) {
            console.log(error);
          });
    };

  }]);
