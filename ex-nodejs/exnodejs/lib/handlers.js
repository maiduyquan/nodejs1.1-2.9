exports.api = {}

exports.home = (req, res) => res.render('home')
// **** these handlers are for browser-submitted forms 
exports.regsisterSignup = (req, res) => {
   res.render('regsister-signup', { csrf: 'CSRF token goes here' })
 
}

exports.regsisterSignupProcess = (req, res) => {

    console.log('CSRF token (from hidden form field): ' + req.body._csrf) 
    console.log('Name (from visible form field): '+ req.body.name)  
    console.log('birthday (from visible form field): '+ req.body.birthday) 
    console.log('gender (from visible form field): '+ req.body.gender)
    console.log('class (from visible form field): '+ req.body.class)
    res.redirect(303, '/regsister-signup/thank-you')
}
exports.regsisterSignupThankYou = (req, res) => res.render('regsister-signup-thank-you') 




exports.regsister = (req, res) => {
res.render('regsister', { csrf: 'CSRF token goes here' })
}
exports.api.regsisterSignup = (req, res) => {
    console.log('CSRF token (from hidden form field): '+ req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name) 
    console.log('birthday (from visible form field): '+ req.body.birthday) 
    console.log('gender (from visible form field): '+ req.body.gender)
    console.log('class (from visible form field): '+ req.body.class)
    res.send({ result: 'success' })
}

exports.notFound = (req, res) => res.render('404')

exports.serverError = (err, req, res, next) => res.render('500') 
