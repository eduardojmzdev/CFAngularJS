angular.module("CustomDirectives",[])
.directive('backImg',function(){
	return function(scope,element,attrs){
		attrs.$observe('backImg', function(value){
			element.css({
				"background" : "url("+value+")",
				"background-size" : "cover",
				"background-position" : "center",
				"border-radius":"50%",
				"width": "100px",
				"height": "100px",
				"display": "inline-block"
			});
		});
	}
})


.controller("appCtrl",['$scope','$http',function($scope,$http){
	$http.get("https://api.github.com/users/lalink27/repos").then(function succes(response){
			$scope.repos=response.data;
			console.log($scope.repos)
	},function error(err){
		console.log(err.data)
	})

}]);