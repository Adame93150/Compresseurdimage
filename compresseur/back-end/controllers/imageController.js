const imageModel = require("../models/image")


const getImage = async (req, res) => {
    try {
        const image = await imageModel.find()

        res.json(image)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}



module.exports = { getImage }