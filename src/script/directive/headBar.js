angular.module('app').directive('appHeadBar',function(){
    return {
    	restrict:'AE',
    	templateUrl:'view/template/headBar.html',
    	scope:{
    		text:"@"
    	},
    	link:function(scope){
    		scope.back = function(){
    			window.history.back();
    		}

    	}
    }
})