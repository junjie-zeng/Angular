angular.module('app').controller('companyPositionCtr',['$scope','$http','$state',function($scope,$http,$state){
	//list
    $http({
        method:'GET',
        url:'data/company.json?id=' + $state.params.id
    }).then(function(res){
        console.log(res.data)
       $scope.companyPosition = res.data

    })


}])