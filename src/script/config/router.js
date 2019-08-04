angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider.state('main',{
    	url:'/main', //哈希值
    	templateUrl:'view/main.html',
    	controller:'mainCtrl'
    });

    $urlRouterProvider.otherwise('main')

   
}])

   