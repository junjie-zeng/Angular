angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider.state('main',{
    	url:'/main', //哈希值
    	templateUrl:'view/main.html',
    	controller:'mainCtrl'
    }).state('position',{
    	url:'/position/:id',
    	templateUrl:'view/position.html', //template/
    	controller:'positionCtrl'
    }).state('companyPosition',{
        url:'/companyPosition/:id',
        templateUrl:'view/companyPosition.html',
        controller:'companyPositionCtr'
    })

    $urlRouterProvider.otherwise('main')

   
}])

   