


module.exports = function(){


	var express = require('express');
	var bodyParser = require('body-parser');
	var React = require('react');


	var app = express();

	app.use( bodyParser.json() );
	app.use(bodyParser.urlencoded({ extended: true }));

	//.use(express.static('public'));   // an alternate
	app.use( express.static( __dirname ) );



	// alter response header so it doesn't say powered by expressJS
	app.use(function(req, res, next){
		res.set('X-Powered-By', '');
		next();
	});


	
	return app;

}
	