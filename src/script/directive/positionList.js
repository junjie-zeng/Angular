angular.module('app').directive('positionList',function(){
	return {
		restrict:'AE',
		replace:true,
		templateUrl:'view/template/positionList.html',
		scope:{     //降低了指令与控制器的耦合度，有利于指令的复用
			data:'='
		}
	}
})