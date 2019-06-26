const express = require('express')
const helpers = require('./_helpers')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

app.use(express.static('public'))
app.engine(
  'handlebars',
  handlebars({
    defaultLayout: 'main'
  })
)
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('signin')
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
