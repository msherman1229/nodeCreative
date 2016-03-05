var app = angular.module("app", []); 

app.factory('resultFetcher', resultFetcher); 
app.controller("mainCtrl", mainCtrl); 

function resultFetcher ($http) {
	var API_ROOT = 'results';
	return {
		get: function () {
			return $http
				.get(API_ROOT)
				.then(function (resp) {
					return resp.data
				})
		}
	}
}; 

function mainCtrl ($scope, resultFetcher) {
	$scope.questionSubmit = function (user) {
		console.log(user.choice);
		console.log(user.choice2);
		console.log(user.choice3);   
	};
	resultFetcher.get()
		.then(function (data) { 
			console.log(data);
			$scope.results = data;  
		}); 
}
