const express = require('express')
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000
const app = express()

app.engine(
    'handlebars', 
    expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.use(express.static( __dirname + '/public'))
// app.set('views','./')
app.get('/', (req,res) => {
    res.render('home')
})
//30-4
app.get('/30-4', (req,res) => {
    res.render('30-4')
})

app.get('/christmas', (req,res) => {
    res.render('christmas')
})

app.get('/new-year', (req,res) => {
    res.render('new-year')
})





app.listen(port)