'use strict';

angular.module('myApp.login', [

])



.controller('loginCtrl', ['textsend','send','$scope','$log','$ocLazyLoad',function(textsend,send,$scope,$log,$ocLazyLoad) {
    //$ocLazyLoad.load('views/login/login.css');
    $scope.sendmessage= function () {
        console.log('sendmessage');

        //textsend.get({}, function (res) {
        //    $log.info("create route success", res);
        //}, function (err) {
        //    $log.info("create route fail", err);
        //})
        send.create({"Post":{"Title":"lsm"},"Comment":{"Content":"fdhgdfhfghfgh"}}, function (res) {
            $log.info("create route success", res);

        }, function (res) {
            $log.info("create route fail", res);
        });
    }

}]);