var articles = [];

module.exports.create = function(res,req){
    res.body.comments = [];
    articles.push(req.body);
    res.redirect('/articles');
};

module.exports.index = function(req,res){
    res.json(articles);
}

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

module.exports.new = function(res,req) {
    res.send("<form method='post' action='/articles'>\
                <input type='text' placeholer='title' name='title'>\
                <input type='text' placeholer='author' name='author'>\
                <textarea placeholder='post' name='body'></textarea>\
                <button></button>\
            </form>");
};