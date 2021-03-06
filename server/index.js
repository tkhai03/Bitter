require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const postCtrl = require('./Controller')
const nodemailer = require('nodemailer')
const path = require('path')

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

//post endpoints
app.get('/api/posts', postCtrl.getPosts)
app.post('/api/posts', postCtrl.addPost)
app.put('/api/posts/:post_id', postCtrl.editPost)
app.delete('/api/posts/:post_id', postCtrl.deletePost)


app.post('/api/likes/:post_id', postCtrl.likePosts)
app.get('/api/likes', postCtrl.getLikedPosts)

//serve up build folder as a bundle of assets.
//sends to client, then loads it. Requests can now be sent to the server
app.use(express.static(__dirname +'/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})