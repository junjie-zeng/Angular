angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){

    /*$http.get('/data/positionList.json').success(function(res){
        console.log(res)

    });*/

   
    $http({
        method:'GET',
        url:'/data/positionList.json'
    }).then(function(res){
        console.log(res.data)
        $scope.list = res.data

    })
	/*//list
    $scope.list = [{
    	id:'1',
    	name:'销售',
    	companyName:'阿里',
    	imgSrc:'./image/company-1.png',
    	city:'上海',
    	industry:'互联网',
    	time:'2019-8-10 9.55'
    },
    {
    	id:'2',
    	name:'市场',
    	companyName:'百度',
    	imgSrc:'./image/company-2.png',
    	city:'上海',
    	industry:'互联网',
    	time:'2019-8-10 9.55'
    }]*/



}])