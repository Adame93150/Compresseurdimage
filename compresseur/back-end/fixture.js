const mongoose = require('mongoose')
const userModel = require("./models/user")
const imageModel = require("./models/image")

mongoose.connect("mongodb://localhost:27017/imageIn", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const users = userModel.insertMany([
    
    {
        username: "mehdi",
        password: "poules",
        email:"kle@gmail.com"
        
    },
    {
        username: "stanislas",
        password: "Chevaux",
        email:"iole@gmail.com"
        
    },
    {
        username: "hubert",
        password: "bonsoirparis",
        email:"le@gmail.com"
        
    },
    {
        username: "richard",
        password: "iminGermany",
        email:"kale@gmail.com"
        
    },
    {
        username: "eustache",
        password: "kekeke",
        email:"kabrie@gmail.com"
    },
    {
        username: "jean eudes",
        password: "kariiim",
        email:"kabriole@gmail.com"
    },
])
const image = imageModel.insertMany([
    {
        imgCompress: "'https://fr.web.img2.acsta.net/c_310_420/pictures/19/09/13/14/45/4570058.jpg',"
    },

])
