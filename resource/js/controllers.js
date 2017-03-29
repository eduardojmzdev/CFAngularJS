angular.module("FinalApp")
.controller("MainController",function($scope,$resource,PostResource){
	
	user=$resource("https://jsonplaceholder.typicode.com/users/:id",{id:"@id"});
	$scope.posts=PostResource.query();
	$scope.users=user.query();
	//query()-> GET /post -> un arreglo de Posts

	$scope.removePost= function(post){
		PostResource.delete({id:post.id});
		$scope.posts=$scope.posts.filter(function(element){
			return element.id!==post.id;
		})	;
	};

})
.controller("PostController", function($scope,PostResource,$routeParams,$location){
	$scope.title="Editar Post";
	$scope.post=PostResource.get({id:$routeParams.id});
	
	$scope.savePost=function(){
		PostResource.update({id:$scope.post.id},{data:$scope.post},function(data){
			console.log(data);
			$location.path("/");
		}) ;
	}

})
.controller("NewPostController", function($scope,PostResource,$location,$routeParams){	
	$scope.post={};
	$scope.title="Crear Post";
	$scope.savePost=function(){
		PostResource.save({data:$scope.post},function(data){
			console.log(data);
			$location.path("/");
		}) ;
	}

})

  