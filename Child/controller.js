angular.module('myApp',[])
.run(function($rootScope){
	$rootScope.nombre="Codigo Facilito";
})
.controller("FirstController",function($scope){
	$scope.nombre="CF";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre="Lalo";
		});
	},1000);
})
.controller("ChildController",function($scope){
	$scope.nombre="Eduardo";
});