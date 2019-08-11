angular.module('app').controller('mainCtrl',['$scope',function($scope){
	//list
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
    }]



}])