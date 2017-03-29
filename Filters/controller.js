angular.module('myApp',[])
.filter("removeHTML",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})
.controller('FiltersController',['$scope',function($scope){
	$scope.mi_html="<p>Hola Mundo </p>"
	$scope.saludo={};
	$scope.saludo.title="Hola ";
	$scope.saludo.body="Lalo ";
	$scope.costo=34;



}]);