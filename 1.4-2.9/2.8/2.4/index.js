var express = require('express');
var app = express();
var url = require('url');
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/',function(req, res) {
    res.send('The Home page');
});

app.get('/greet/:statement',function(req, res) {
    var greeting = req.params.statement || 'Default greeting';
    res.send('This Is my second node app.' + greeting);

});

app.listen(7000,function() {
    console.log('Server listening on port 7000');
})