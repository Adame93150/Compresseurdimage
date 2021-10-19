const express = require("express")
const router = express.Router()
const { verifyToken, onlyAdmin } = require("../middlewares/authMiddleware")
const { getUsers, getUser } = require("../controllers/userController")

router.get("/", verifyToken, getUsers)

router.get("/myself", verifyToken, getUser)

module.exports = router

