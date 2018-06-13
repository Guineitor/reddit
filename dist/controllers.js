angular.module('starter.controllers', [])


var app =  angular.module("lilreddit", []);
app.controller("lilredditCtrl", function($scope, $http){

  $http({
    method: 'GET',
    url: 'https://reddit.com/.json'
  }).then(function successCallback(response) {
    var obj = [];

    angular.forEach(response.data.data.children, function(value, key) {
      obj.push(value.data);
    });
    
    $scope.rlist = obj;

    }, function errorCallback(response) {
      $scope.rlist = {"error":"=("};
    });


});
