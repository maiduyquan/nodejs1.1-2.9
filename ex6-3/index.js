const express = require('express')
const port = process.env.PORT || 3000
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const catName = require('cat-name')
const app = express()

app.engine(
    'handlebars', 
    expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.use(cookieParser())

app.use(session({
    secret: "keyboard cat",
	resave: false,
	saveUninitialized: false,
}))

app.set('view engine', 'handlebars')

app.get('/greeting',(req,res) => {
    res.render('greeting', {
        message:'hello esteemed programmer!',
        style: req.query.style,
        // userid: req.cookie.userid,
        username: req.session.username
    })
})

// app.get('/set-random-userid', (req,res) => {
//     res.cookie('userid', (Math.random()*10000).toFixed(0))
//     res.redirect('/greeting')
// })
app.get('/set-random-username', (req,res) =>{
    req.session.username = ["quan"]
    res.redirect('/greeting')
})


app.use(express.static(__dirname + '/public'))

app.listen(port)