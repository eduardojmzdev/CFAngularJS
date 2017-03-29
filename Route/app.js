angular.module("CustomDirectives",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller:"ReposCtrl",
		templateUrl:"templates/home.html"
	})
	.when("/repo/:name",{
		controller:"RepCtrl",
		templateUrl:"templates/rep.html"
	})

});