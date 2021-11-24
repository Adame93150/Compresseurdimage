const express = require("express")
const router = express.Router()
const { verifyToken,} = require("../middlewares/authMiddleware")
const { getUsers, getUser } = require("../controllers/userController")

// route pour avoir acces aux users (seulement avec postman) 

router.get("/", verifyToken, getUsers)

router.get("/myself", verifyToken, getUser)

module.exports = router

