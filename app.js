var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/blog', function(req, res) {
	res.render('blog');
});

app.get('/:id', function(req, res) {
	res.render('index', { id: req.params.id });
});


app.listen(3000, function(req, res) {
	console.log('Server running at port 3000');
});

