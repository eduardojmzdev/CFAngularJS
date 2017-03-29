angular.module("CustomDirectives",[])
.directive("myAutocomplete",function(){
	function link27(scope,element,attrs){
		$(element).autocomplete({
			source:scope[attrs.myAutocomplete],
			select:function(ev,ui){
				ev.preventDefault();
				if (ui.item) {
					scope.optionSelected(ui.item.value)
				}
			},
			focus:function(ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return{
		link:link27
	};
})


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
			console.log("option"+main_repo);
		});
	}

	$scope.limpiar= function(){
		$scope.main_repo=NULL;
		console.log(main_repo);
	}
}]);