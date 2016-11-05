var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var store = require('json-fs-store')();

app.use(bodyParser.json());

app.post('/api/match', function (req, res) {
	console.log(req.body);
	var match = { 
		id: req.body.id,
		goals1: req.body.goals1, 
		goals2: req.body.goals2 
	};

	store.add(match, function(err) {
		if (err) {
			throw err;
		}
		res.sendStatus(200);
	});
});

app.get('/api/matches', function (req, res) {
	store.list(function(err, matches) {
		if (err) {
			throw err;
		}
		res.json(matches);
	});
});

app.get('/api/reset', function(req, res) {
	store.list(function(err, matches) {
		if (err) {
			throw err;
		}
		for (var i=0; i<matches.length; i++) {
			store.remove(matches[i].id, function(err) {
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
