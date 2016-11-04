var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var store = require('json-fs-store')();

app.use(bodyParser.json());

app.post('/api/score', function (req, res) {
	console.log(req.body);
	var score = { 
		id: req.body.id,
		goals1: req.body.goals1, 
		goals2: req.body.goals2 
	};

	store.add(score, function(err) {
		if (err) {
			throw err;
		}
		res.sendStatus(200);
	});
});

app.get('/api/scores', function (req, res) {
	store.list(function(err, scores) {
		if (err) {
			throw err;
		}
		res.json(scores);
	});
});

app.get('/api/reset', function(req, res) {
	store.list(function(err, scores) {
		if (err) {
			throw err;
		}
		for (var i=0; i<scores.length; i++) {
			store.remove(scores[i].id, function(err) {
				if (err) {
					throw err;
				}
			});
		}
		res.sendStatus(200);
	});
});

app.listen(4000, function () {
	console.log('Api listening on port 4000!');
});
