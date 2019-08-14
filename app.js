const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const path = require('path')


app.use(express.json()) 
app.use(express.urlencoded())
const indexRoutes = require('./routes/index')

app.use('/', indexRoutes)


//const Model = require('./models/model')



var pgp = require('pg-promise')();
var connectionString = 'postgres://iwvtwtkq:hkj7ZBl9O4Oy2q2wwe87ewJe8OJWDc7x@raja.db.elephantsql.com:5432/iwvtwtkq';
db = pgp(connectionString)

const VIEWS_PATH = path.join(__dirname, '/views')
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))

app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.use(express.static('static'))




app.listen(3000, () => {
    console.log('Server is now running...')
})

