const express = require('express')
const helpers = require('./_helpers')
const handlebars = require('express-handlebars')
const passport = require("./config/passport")
const flash = require("connect-flash")
const session = require("express-session")

const app = express()
const port = 3000
const bodyParser = require("body-parser")

app.set('view engine', 'handlebars')
app.engine(
  'handlebars',
  handlebars({
    defaultLayout: 'main',
    helpers: require("./config/handlebars-helpers")
  })
)

app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret:"secret", resave:"false",saveUninitialized:"false"}))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash("success_messages")
  res.locals.error_messages = req.flash("error_messages")
  res.locals.user = req.user
  next()
})


// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

require('./routes')(app, passport)
