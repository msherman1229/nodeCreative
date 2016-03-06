var app = angular.module("app", []); 

app.factory('resultFetcher', resultFetcher); 
app.controller("mainCtrl", mainCtrl); 

function resultFetcher ($http) {
	var API_ROOT = 'results';
	return {
		get: function ( winner ) {
			return $http
				.get(API_ROOT + "?q=" + winner)
				.then(function (resp) {
					return resp.data
				})
		}
	}
}; 

function mainCtrl ($scope, resultFetcher) {
	$scope.questionSubmit = function (user) {
		var q1 = $scope.user.choice; 
		var q2 = $scope.user.choice2; 
		var q3 = $scope.user.choice3; 
		var q4 = $scope.user.choice4; 
		var q5 = $scope.user.choice5; 
		var q6 = $scope.user.choice6; 
		var winner = calculator(q1, q2, q3, q4, q5, q6);
		resultFetcher.get(winner)
                	.then(function (data) {
                        	console.log(data);
                        	$scope.results = data;
                	});    
	};
}

function calculator ( q1, q2, q3, q4, q5, q6 )
{
	var candidates = [
		{name:"Hillary\ Clinton", count: 0}, 
		{name:"Ted\ Cruz", count: 0}, 
		{name:"John\ Kasich", count: 0}, 
		{name:"Marco\ Rubio", count: 0}, 
		{name:"Bernie\ Sanders", count: 0}, 
		{name:"Donald\ Trump", count: 0}
	]
	switch (q1) {
	case "1":
		candidates[4]["count"]++;
		break;   
	case "2":
		candidates[0]["count"]++;
		candidates[2]["count"]++;
		break;  
	case "3":
		candidates[3]["count"]++;
		candidates[1]["count"]++;
		break;
	case "4":
		candidates[5]["count"]++; 
		break;
	default:
	}
	switch (q2) {
	case "1":
		candidates[0]["count"]++;
		break; 
	case "2":
		candidates[4]["count"]++;
		break;
	case "3":
		candidates[3]["count"]++;
		candidates[1]["count"]++;
		candidates[5]["count"]++;
		candidates[2]["count"]++;
		break;
	default:
	}
	switch (q3) {
	case "1":
		candidates[0]["count"]++;
		candidates[2]["count"]++;
		break; 
	case "2":
		candidates[4]["count"]++;
		candidates[1]["count"]++;
		candidates[3]["count"]++;
		break;
	case "3":
		candidates[5]["count"]++;
		break;
	case "4":
		candidates[5]["count"]++;
		break;
	default:
	}
	switch (q4) {
	case "1":
		candidates[0]["count"]++;
		candidates[4]["count"]++;
		break;
	case "2":
		candidates[5]["count"]++;
		break;
	case "3":
		candidates[1]["count"]++;
		candidates[3]["count"]++;
		candidates[2]["count"]++;
		break;
	default:
	}
	switch (q5) {
	case "1":
		candidates[1]["count"]++;
		candidates[4]["count"]++;
		break;
	case "2":
		candidates[3]["count"]++;
		candidates[1]["count"]++;
		break; 
	case "3":
		candidates[5]["count"]++;
		candidates[2]["count"]++;
		break;
	default:
	}
	switch (q6) {
	case "1":
		candidates[2]["count"]++; 
		candidates[0]["count"]--; 
		candidates[1]["count"]--;
		candidates[5]["count"]--;
		break;
	case "2":
		candidates[0]["count"]++;
		candidates[4]["count"]++;
		break;
	case "3":
		candidates[1]["count"]++;
		candidates[3]["count"]++;
		break;
	case "4":
		candidates[5]["count"]++;
		break;
	default:
	}	
	candidates.sort(function(a,b) {return b.count-a.count});
	return candidates[0]["name"]; 
}
