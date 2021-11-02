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
        
    },
    {
        username: "stanislas",
        password: "Chevaux",
        
    },
    {
        username: "hubert",
        password: "bonsoirparis",
        
    },
    {
        username: "richard",
        password: "iminGermany",
        
    },
    {
        username: "eustache",
        password: "kekeke",
    },
    {
        username: "jean eudes",
        password: "kariiim",
        
    },
])
const image = imageModel.insertMany([
    {
        imgCompress: "'https://fr.web.img2.acsta.net/c_310_420/pictures/19/09/13/14/45/4570058.jpg',"
    },

])
