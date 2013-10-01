'use strict';

var templatesUrl = '../templates/';

var app = angular.module('demo-nxt-box', ['omnibox']);

app.controller('DemoCtrl', function ($scope){
  $scope.box = {
    showCards: false,
    type: 'empty',
    content: {},
    changed: Date.now()
  };

  $scope.openTemplate = function (boxType) {
    $scope.box.type = boxType;
    $scope.box.showCards = true;
  };
});
