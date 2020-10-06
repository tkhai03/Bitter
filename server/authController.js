const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {email, username, password} = req.body
//check if user exists in db
        const[user] = await db.check_email([email])
//if user exists, reject
        if (user){
            return res.status(409).send('Email already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
//save user and password to db
        const newUser = await db.register_user([email, username, hash])
        req.session.user = newUser
        res.status(200).send(newUser)
    },

    login: async(req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        const [existingUser] = await db.check_email([email])
        if (!existingUser){
            return res.status(404).send('Email invalid')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        if (!isAuthenticated){
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