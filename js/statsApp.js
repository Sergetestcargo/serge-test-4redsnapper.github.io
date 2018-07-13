angular.module("statsApp", [])
	.controller("statsCtrl", function ($scope) {
		// just setting random score values for demo:
		$scope.score = {
			patents: 313,
			followers: 1000200,
			following: 361
		}		
	});