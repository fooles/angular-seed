'use strict';

angular.module('myApp.detil', [])



.controller('detilCtrl', ['textsend','send','$scope','$log',function(textsend,send,$scope,$log) {
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