const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/usersRoutes")
const imageRoutes = require("./routes/imageRoutes")


const cors = require("cors")

// connexion a la base de donnée
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

// routes du back end
app.use("/auth", authRoutes)
app.use("/users", usersRoutes)
app.use("/images", imageRoutes)

// le serveur ecoute au port 8001
app.listen(port, () => {
    console.log("The server is waiting for requests")
})

