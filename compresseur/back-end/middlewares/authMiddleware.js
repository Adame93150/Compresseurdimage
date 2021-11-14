const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
const config = require("../config.js")


// const continueIfUserExists = async (req, res, next) =>  {
//     try {
//         const email = req.body.email
//         const user = await userModel.findOne({ email })

//         if (user) {
//             req.user = user
//             next()
//         } else {
//             res.status(400).json({ errorMessage: "User was not found" })
//         }

//     } catch (err) {
//         console.error(err)

//         res.status(500).json({ errorMessage: "There was a problem :(" })
//     }
// } 

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const result = jwt.verify(token, config.secret)

        if (result.id) {
            const user = await userModel.findById({ _id: result.id }).lean()

            req.user = user
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You don't have acces to this" })
    }
}


module.exports = { verifyToken, }