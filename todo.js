var todoApp = angular.module('todoApp', []);
todoApp.controller('todoController', function($scope){
	
	$scope.loadTasks = function() {
		for (var i = 0; i < localStorage.length; i++) {
			$scope.tasks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}
		
	}

	function storeTasks() {
		for (var i = 0; i < $scope.tasks.length; i++) {
			localStorage.setItem($scope.tasks[i].title, JSON.stringify($scope.tasks[i]));
			console.log($scope.tasks[i].title);
		}
	}

	$scope.tasks = [];
	$scope.loadTasks();

	$scope.addTask = function(inputTitle, inputDesc, inputDead){
		$scope.tasks.push(
		{
			title: inputTitle,
			description: inputDesc,
			deadline: inputDead,
			done: false
		})

		storeTasks();
		$scope.inputTitle = '';
		$scope.inputDesc = '';
		$scope.inputDead = '';

	}

	$scope.remove = function(index){
		console.log(index);
		console.log($scope.tasks);
		localStorage.removeItem($scope.tasks[index].title);
		$scope.tasks.splice(index, 1);
		
	}

	$(function() {
		$("#datepicker").datepicker();
	});



});