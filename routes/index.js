var express = require('express');
var router = express.Router();
var request = require('request'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root: 'public' }); 
});

//REST SERVICE RETURN 
router.get('/results', function(req, res, next) {
	var myRe = new RegExp("^" + req.query.q); 
	var jsonresult = []; 
	for ( var i = 0; i < results.length; i++) {
		var result = results[i]["name"].search(myRe); 
		if (result != -1)
		{
			console.log(results[i]); 
			jsonresult.push({result:results[i]}); 
		}
	}
	//res.send(results);
	res.status(200).json(jsonresult);  
}); 

module.exports = router;

var results = [
	{
		name: "Hillary Clinton",
		image: "./images/clinton.png", 
		title: "You're with Her! Hill yes!",
		url: "https://www.hillaryclinton.com/"
	},
	{
		name: "Bernie Sanders",
		image: "./images/sanders.png", 
		title: "Feel the Bern!", 
		url: "https://go.berniesanders.com/page/content/contribute/"
	},
	{
		name: "Ted Cruz",
		image: "./images/cruz.png",
		title: "TrusTed!", 
		url: "https://www.tedcruz.org/about/"
	},
	{
		name: "John Kasich", 
		image: "./images/kasich.png", 
		title: "Kasich for US", 
		url: "https://johnkasich.com/"
	},
	{
		name: "Marco Rubio", 
		image: "./images/rubio.png", 
		title: "A New American Century", 
		url: "https://marcorubio.com/"
	}, 
	{
		name: "Donald Trump",
		image: "./images/trump.png", 
		title: "Make America Great Again!", 
		url: "https://www.donaldjtrump.com/"
	}
];
	

