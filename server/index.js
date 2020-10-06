require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')

const app = express()
app.use(express.json())
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {   
    app.set('db', dbInstance)
    console.log('DB connection has been initialized.')
    app.listen(SERVER_PORT, () => console.log(`Arriving on port ${SERVER_PORT}`))
})
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

//#auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//post endpoints TBD