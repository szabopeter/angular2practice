var express = require('express');
var app = express();
var store = require('json-fs-store')();

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
