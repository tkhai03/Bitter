require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const authCtrl = require('./authController')

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