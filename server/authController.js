require('dotenv').config()
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const {NODE_EMAIL, NODE_PASSWORD}= process.env


module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { email, username, password } = req.body
        //check if user exists in db
        const [user] = await db.check_email([email])
        //if user exists, reject
        if (user) {
            return res.status(409).send('Email already exists')
        }
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                type:'login',
                user: NODE_EMAIL,
                pass: NODE_PASSWORD
            }
        })

        let mailOptions = {
            from: NODE_EMAIL,
            to: email,
            subject: 'This is a Test',
            text: 'IT WORKS!!!'
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log('Email SENT!')
            }
        })

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //save user and password to db
        const [newUser] = await db.register_user([email, username, hash])
        delete newUser.hash
        req.session.user = newUser
        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const [existingUser] = await db.check_email([email])
        if (!existingUser) {
            return res.status(404).send('Email invalid')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        if (!isAuthenticated) {
            return res.status(403).send('Invalid email or password')
        }
        delete existingUser.hash

        req.session.user = existingUser
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        const db = req.app.get('db')
        res.status(200).send(req.session.user)
    }

}