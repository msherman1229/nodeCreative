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
				$("#mainContainer").empty(); 
				$(".questions").empty(); 
                        	$scope.results = data; 
				var canvas;
var ctx;
var confettiHandler;
//canvas dimensions
var W;
var H;
var mp = 75; //max particles
var particles = [];

$(window).resize(function () {
    canvas = document.getElementById("canvas");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
});
$(document).ready(function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: randomFromTo(5, 30), //radius
            d: (Math.random() * mp) + 10, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.7)",
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: (Math.random() * 0.07) + .05,
            tiltAngle: 0
        });
    }
    StartConfetti();
    
});


function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;  // Green path
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();  // Draw it
    }

    update();
}
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var TiltChangeCountdown = 5;
//Function to move the snowflakes
//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
var angle = 0;
var tiltAngle = 0;
function update() {
    angle += 0.01;
    tiltAngle += 0.1;
    TiltChangeCountdown--;
    for (var i = 0; i < mp; i++) {
        
        var p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        //Updating X and Y coordinates
        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //Every particle has its own density which can be used to make the downward movement different for each flake
        //Lets make it more random by adding in the radius
        p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
        p.x += Math.sin(angle);
        //p.tilt = (Math.cos(p.tiltAngle - (i / 3))) * 15;
        p.tilt = (Math.sin(p.tiltAngle - (i / 3))) * 15;

        //Sending flakes back from the top when it exits
        //Lets make it a bit more organic and let flakes enter from the left and right also.
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 5 > 0 || i % 2 == 0) //66.67% of the flakes
            {
                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngle: p.tiltAngle, tiltAngleIncremental: p.tiltAngleIncremental };
            }
            else {
                //If the flake is exitting from the right
                if (Math.sin(angle) > 0) {
                    //Enter from the left
                    particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
                else {
                    //Enter from the right
                    particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
            }
        }
    }
}
function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    confettiHandler = setInterval(draw, 15);
}
function StopConfetti() {
    clearTimeout(confettiHandler);
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}
//animation loop

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
