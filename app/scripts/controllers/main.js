'use strict';

/**
 * @ngdoc function
 * @name chatroomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatroomApp
 */
angular.module('chatroomApp')
  .controller('MainCtrl', ['parseService', '$scope', function(parseService, $scope) {

    $scope.getChatrooms = function() {
      return parseService.getChatrooms().then(function(result) {
        $scope.rooms = result;
      });
    };

    $scope.getChatrooms();

    $scope.roomName = '';

    $scope.user = 'Cheezehead'; //To be replaced by dynamic value

    $scope.userId = 'lh6Z485xif'; //To be replaced by dynamic value

    $scope.newRoom = function() {
      if($scope.roomName !== ''){
        parseService.newRoom($scope.roomName, $scope.user);
      };
      $scope.roomName = '';
      $scope.rooms = $scope.getChatrooms();
    };

    $scope.currentRoom = '';

    $scope.newMessage = '';

    $scope.postMessage = function(){
      parseService.postMessage($scope.newMessage, $scope.currentRoom, $scope.userId).then(function(response){
        $scope.newMessage = '';
        $scope.getMessages();
      });
    }

    $scope.hideChat = true;

    $scope.messages = '';

    $scope.getMessages = function() {
      parseService.getMessages($scope.currentRoom).then(function(result) {
        $scope.messages = result;

      })
    };

    $scope.changeRoom = function(id) {
      $scope.currentRoom = id;
      $scope.getMessages();
      if ($scope.hideChat === true) {
        $scope.hideChat = false;
      }
    };
  }]);
