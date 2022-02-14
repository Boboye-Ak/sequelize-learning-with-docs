const express=require("express");
const { getAllBooks } = require("../controllers/bookController");
const router=express.Router()

router.get("/allbooks", getAllBooks)
module.exports=router;