angular.module("CustomDirectives")
.controller("ReposCtrl",['$scope','$http',function($scope,$http){
	$scope.repos=[];
	$scope.repo={};
	$scope.posts={};
	$http.get("https://api.github.com/users/lalink27/repos").then(function succes(response){
			$scope.posts=response.data;
			console.log($scope.posts);
			for (var i = response.data.length-1; i >=0 ; i--) {
				$scope.repo = response.data[i];
				console.log($scope.repo.name);
				$scope.repos.push($scope.repo.name);
			}
	},function error(err){
		console.log(err.data)
	})

	$scope.optionSelected= function(data){
		$scope.$apply(function(){
			$scope.main_repo=data;
			console.log($scope.main_repo);			
		});
	}

	$scope.limpiar= function(){
		$scope.main_repo=NULL;
		// console.log(main_repo);
	}
}])
.controller("RepCtrl",['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.repo={};	
	$http.get("https://api.github.com/repos/lalink27/"+$routeParams.name).then(function succes(response){
			$scope.repo=response.data;
			
	},function error(err){
		console.log(err.data)
	})

}]);
