const express = require("express")
const router = express.Router()
const { getImage} = require("../controllers/imageController")



//route pour recuperer l'image (pas terminée)

router.get("/", getImage)

module.exports = router