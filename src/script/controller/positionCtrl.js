angular.module('app').controller('positionCtrl',['$q','$http','$scope','$state',function($q,$http,$scope,$state){
	$scope.isLogin = true
	
    //获取职位
	function getPosition() {
		var def = $q.defer();
		$http({
	        method:'GET',
	        url:'/data/position.json?id=' + $state.params.id
	    }).then(function(res){
	        
	        $scope.position = res.data;
	        def.resolve(res.data)
	       
	    }).then(function(err){
	    	def.reject(err)
	    })

	    return def.promise

	}
    //根据id查询公司
	function getCompany(id){
		$http({
			method:'GET',
			url:'data/company.json?id=' + id
		}).then(function(res){
			//console.log(res.data)
            $scope.company = res.data
		})
	}

	getPosition().then(function(obj){
		//console.log(obj.companyId)
		getCompany(obj.companyId)

	},function(){

	})
	

  
   


}])