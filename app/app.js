'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'oc.lazyLoad',
    'ui.router',
    'myApp.router',
    'myApp.list',
    'myApp.detil',
    'myApp.login',
    'myApp.version',
    'ui.router.state.events',
    'ngResource',
    'myApp.resource',


])
myApp.constant('GLOBAL', {
    size: 10,
    host: 'http://localhost:8002/'
})
myApp.run(['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {
//监听路由事件

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        console.log(toState.name);
    })

}]);

