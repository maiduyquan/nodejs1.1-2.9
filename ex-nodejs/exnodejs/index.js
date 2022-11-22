const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')

const handlers = require('./lib/handlers')


const app = express()


app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))



    
app.get('/', handlers.home)
    
    
    // handlers for browser-based form submission
app.get('/regsister-signup', handlers.regsisterSignup)
app.post('/regsister-signup/process', handlers.regsisterSignupProcess) 
app.get('/regsister-signup/thank-you', handlers.regsisterSignupThankYou)
    // handlers for fetch/JSON form submission
app.get('/regsister', handlers.regsister)
app.post('/api/regsister-signup', handlers.api.regsisterSignup)
    
    

    
    
app.use(handlers.notFound)
app.use(handlers.serverError)

if(require.main === module) {
    app.listen(port, () => {
        console.log( `Express started on http://localhost:${port}` + '; press Ctrl-C to terminate.' )
    })
}else {
    module.exports = app
}
    

