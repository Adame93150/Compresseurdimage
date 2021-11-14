const userModel = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.js")
const expressValidator = require("express-validator");
const nodemailer = require('nodemailer');

var pretPourMail = false
const signup = async (req, res) => {
    try {
       
        const username = req.body.username
        const password = bcryptjs.hashSync(req.body.password)
        const email = req.body.email
        const user = await userModel.create({ username, password,email})

        res.json({ message: "User was created!", user })
        pretPourMail = true
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
        pretPourMail = false
    }

    if(pretPourMail) {
    // email
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ezka.mehdi@gmail.com',
          pass: 'Xblastv2'
        }
      });
      
      var mailOptions = {
        from: 'ezka.mehdi@gmail.com',
        to: 'morocozik@gmail.com',
        subject: 'Imagein inscription completée',
        text: "Bravo pour votre inscription a ImageIn \n votre identifiant est username: \n votre mot de passe est password: "
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    };
}

const login = async (req, res) => {
    try {

        const username = req.body.username
        const user = await userModel.findOne({ username })
        const result = bcryptjs.compareSync(req.body.password, user.password)




        if (result) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                })
                
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