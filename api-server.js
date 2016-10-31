var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var store = require('json-fs-store')();

app.use(bodyParser.json());

app.post('/score', function (req, res) {
	console.log(req.body);
	var score = { 
		score1: req.body.score1, 
		score2: req.body.score2 
	};

	store.add(score, function(err) {
		if (err) {
			throw err;
		}
	});
	res.sendStatus(200);
});

app.get('/scores', function (req, res) {
	store.list(function(err, scores) {
		if (err) {
			throw err;
		}
		res.json(scores);
	});
});

app.listen(4000, function () {
	console.log('Api listening on port 4000!');
});
