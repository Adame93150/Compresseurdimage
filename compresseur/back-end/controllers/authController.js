const userModel = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.js")
const expressValidator = require("express-validator");


const signup = async (req, res) => {
    try {
        const username = req.body.username
        const password = bcryptjs.hashSync(req.body.password)
      

        const user = await userModel.create({ username, password })

        res.json({ message: "User was created!", user })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const login = async (req, res) => {
    try {

        console.log('merci je sais');
        const username = req.body.username
        const user = await userModel.findOne({ username })
        const result = bcryptjs.compareSync(req.body.password, user.password)

        console.log('je teste quelque chose')


        if (result) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                })
                console.log("blabla")
            res.status(200).json({ message: "You're now login!", token })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

module.exports = { signup , login }