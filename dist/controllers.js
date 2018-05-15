angular.module('starter.controllers', [])


var app =  angular.module("lilreddit", []);
app.controller("lilredditCtrl", function($scope, $http){

  $http.get('https://reddit.com/.json').success(function(rlist) {
    $scope.rlist = rlist.data.children;
  });


});
