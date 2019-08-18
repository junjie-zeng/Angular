angular.module('app').directive('appPositionInfo',function(){
    return {
    	restrict:'AE',
    	templateUrl:'view/template/positionInfo.html',
    	replace:true,
        scope:{
            isActive:'=',
            isLogin:'=',
            pos:'='
        },
        link:function(scope){
            scope.imagePath = scope.isActive ? "image/star-active.png":"image/star.png";
            //scope.imagePath = "image/star-active.png"
            

        }

      
    }
})