const express=require("express");
const { getAllBooks, addBook } = require("../controllers/bookController");
const router=express.Router()


router.get("/", getAllBooks)
router.get("/allbooks", getAllBooks)
router.post("/addbook", addBook)
module.exports=router;