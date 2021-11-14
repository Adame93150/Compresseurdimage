const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/usersRoutes")
const nodemailer = require('nodemailer');

const cors = require("cors")

mongoose.connect("mongodb://localhost:27017/imageIn", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8001

const app = express()
app.use(cors())

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})

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