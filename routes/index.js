var express = require('express');
var router = express.Router();
var request = require('request'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root: 'public' }); 
});

//REST SERVICE RETURN 
router.get('/results', function(req, res, next) {
	console.log("In results"); 
	res.send(results); 
}); 

module.exports = router;

var results = [
	{
		name: "Hillary Clinton",
		image: "./images/clinton.png",
		slogan: "Hillary for American", 
		title: "You're with Her! Hill yes!"
	},
	{
		name: "Bernie Sanders",
		image: "./images/sanders.png", 
		slogan: "A Future to Believe In", 
		title: "Feel the Bern!"
	},
	{
		name: "Ted Cruz",
		image: "./images/cruz.png",
		slogan: "Courageous Conservatives: Reigniting the Promise of America",
		title: "TrusTed!"
	},
	{
		name: "John Kasich", 
		image: "./images/kasich.png", 
		slogan: "Kasich for US"
	},
	{
		name: "Marco Rubio", 
		image: "./images/rubio.png", 
		slogan: "A New American Century"
	}, 
	{
		name: "Donald Trump",
		image: "./images/trump.png", 
		slogan: "Make America Great Again!"
	}
];
	

