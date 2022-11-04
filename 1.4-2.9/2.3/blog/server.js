var express = require('express'),
    app = express(),
    articles = require('./controller/articles');

//CRUD
//CREATE READ UPDATE DELETE
/*
    a post going to look like this:
    {
        title:"",
        body:"",
        author:"",
        comments:[]
    }

    a comment would like
    {
        name:"foo",
        text:"dasjasfjaf"
    }
*/


app.use(express.morgan());
app.use(express.bodyParser());

var posts = [];

var notImplimented = function(req,res){
    res.send(501)
}
//articles
app.get('/articles',notImplimented);//show them all blog posts
app.get('/articles/new',articles.new);
app.get('/articles/:aricleId',notImplimented);//reading one

app.post('/articles',articles.create);//reading a new one
app.put('/articles/:aricleId',notImplimented);//updating one
app.del('/articles/:aricleId',notImplimented);//deleting one

//comments
app.post('/articles/:aricleId/comments',notImplimented);
app.del('/articles/:aricleId/comments/:commentId',notImplimented);

app.listen(8080);