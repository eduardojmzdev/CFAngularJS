var app=angular.module('ToDoList',['LocalStorageModule']);

app.service('ToDoService',function(localStorageService){
	
	this.key="angular-toDo";

	if (localStorageService.get(this.key)) {
		this.activities=localStorageService.get(this.key);	
	}
	else{
		this.activities=[];
	}

	this.addAct= function(newAct){
		this.activities.push(newAct);
		this.updateLocalStorage();
		return this.activities;
	}

	this.updateLocalStorage= function(){
		localStorageService.set(this.key,this.activities);
	}

	this.clean= function(){
		this.activities=[];
		this.updateLocalStorage();
		this.getAll();
		return this.activities;
	}

	this.getAll= function(){
		return this.activities;
	}

	this.removeItem= function(item){
		this.activities=this.activities.filter(function(act){
			return act !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	}



	console.log(this) ;
	
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