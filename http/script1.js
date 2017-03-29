var app=angular.module('app',[]);
app.controller("FirstController",["$scope","$http",FirstController]);

function FirstController(s,h){
	s.posts=[
				{title:"tarea1 prueba",body:"cuerpo1"}
			];
	s.nuevoPost={};

	var j= h.get("https://jsonplaceholder.typicode.com/posts");
	j.then(function successCallback(response) {
			console.log(response);
			s.posts=response.data;
		}
		,function errorCallback(error) {

		}
	);

	s.addPost= function(){
		h.post("https://jsonplaceholder.typicode.com/posts",
			{
				title:s.nuevoPost.title,
				body:s.nuevoPost.body,
				id:s.nuevoPost.id=s.posts.length
			}
			).then(
			function successCallback(response) {
				s.posts.push(response.data); //Puede ir s.nuevoPost
				s.nuevoPost={};
			},
			function errorCallback(error) {

			}
		);
	}
}