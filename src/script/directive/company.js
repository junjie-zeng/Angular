angular.module('app').directive('appCompany',function(){
    return {
    	restrict:'AE',
    	templateUrl:'view/template/company.html',
    	replace:true,
    	scope:{
    		com:'='
    	},
    	link:function(scope){
    		///console.log(scope.com)

    	}
    }
})