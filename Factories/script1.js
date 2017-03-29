var app=angular.module('ToDoList',['LocalStorageModule']);

app.factory('ToDoService',function(localStorageService){
	var toDoService={};
	toDoService.key="angular-toDo";

	if (localStorageService.get(toDoService.key)) {
		toDoService.activities=localStorageService.get(toDoService.key);	
	}
	else{
		toDoService.activities=[];
	}

	toDoService.addAct= function(newAct){
		toDoService.activities.push(newAct);
		toDoService.updateLocalStorage();
		return toDoService.activities;
	}

	toDoService.updateLocalStorage= function(){
		localStorageService.set(toDoService.key,toDoService.activities);
	}

	toDoService.clean= function(){
		toDoService.activities=[];
		toDoService.updateLocalStorage();
		toDoService.getAll();
		return toDoService.activities;
	}

	toDoService.getAll= function(){
		return toDoService.activities;
	}

	toDoService.removeItem= function(item){
		toDoService.activities=toDoService.activities.filter(function(act){
			return act !== item;
		});
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	}



	console.log(toDoService) ;
	return toDoService;
});


app.controller("ToDoListController",['$scope','ToDoService',function ($scope,ToDoService){
	$scope.todo=ToDoService.getAll();
	$scope.nuevaAct={};

	$scope.addAct=function(){
		$scope.todo=ToDoService.addAct($scope.nuevaAct);
		$scope.nuevaAct={};
	}

	$scope.clean= function(){
		$scope.todo=ToDoService.clean();
	}

	$scope.removeItem=function(item){
		$scope.todo=ToDoService.removeItem(item);
	}

	// console.log($scope.todo);

	// console.log(localStorageService.isSupported);
	console.log($scope.todo);

}]);