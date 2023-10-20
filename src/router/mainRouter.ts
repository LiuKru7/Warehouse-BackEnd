const express = require("express");
const router = express.Router();

const {
    postAddPart,
    getAllParts,
} = require("../controller/mainController")

router.get("/allParts", getAllParts)
router.post("/addPart", postAddPart)

module.exports=router
