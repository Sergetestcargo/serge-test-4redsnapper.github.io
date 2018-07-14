angular.module("statsApp", [])
	.controller("statsCtrl", function ($scope) {
		// just setting random score values for demo:
		$scope.score = {
			patents: 313,
			followers: 750200,
			following: 361
		}
		$scope.formatNum = function (num) {
		  if (num >= 1000000000) {
		     return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
		  }
		  if (num >= 1000000) {
		     return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		  }
		  if (num >= 1000) {
		     return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		  }
		  return num;
		}		
	});