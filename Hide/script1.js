var app=angular.module('app',[]);
app.controller("FirstController",["$scope","$http",FirstController]);

function FirstController(s,h){
	s.posts=[
				// {title:"tarea1 prueba",body:"cuerpo1"}
			];
	s.nuevoPost={};
	s.loading=true;

	var j= h.get("https://jsonplaceholder.typicode.com/posts");
	setTimeout(function(){
	j.then(function successCallback(response) {
			console.log(response);
			s.posts=response.data;
			s.loading=false;
		}
		,function errorCallback(error) {
			s.loading=false;
		}
	)},1000);

	console.log(s.loading);
	s.borrar= function(){
		s.loading= !s.loading;
		console.log(s.loading);
		return s.loading;

	}

	// s.addPost= function(){
	// 	h.post("https://jsonplaceholder.typicode.com/posts",
	// 		{
	// 			title:s.nuevoPost.title,
	// 			body:s.nuevoPost.body,
	// 			id:s.nuevoPost.id=s.posts.length
	// 		}
	// 		).then(
	// 		function successCallback(response) {
	// 			s.posts.push(response.data); //Puede ir s.nuevoPost
	// 			s.nuevoPost={};
	// 		},
	// 		function errorCallback(error) {

	// 		}
	// 	);
	// }
}