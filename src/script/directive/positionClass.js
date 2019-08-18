angular.module('app').directive('appPositionClass',function(){
	return{
		restrict:'AE',
		templateUrl:'view/template/positionClass.html',
		replace:true,
		scope:{
            pos:'='
		},
		link:function(){
			
		},
		controller:function($scope){
			
            $scope.showPositionList = function(index){
           	    $scope.positionList = $scope.pos.positionClass[index].positionList;
           	    $scope.isActive = index;

           	  
           }

           //此事件有bug


		}
	}
})
