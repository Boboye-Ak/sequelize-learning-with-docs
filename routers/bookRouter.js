const express=require("express");
const { getAllBooks, addBook, findBook, updateBook, deleteBook } = require("../controllers/bookController");
const router=express.Router()


router.get("/", getAllBooks)
router.get("/allbooks", getAllBooks)
router.post("/addbook", addBook)
router.get("/findbook", findBook)
router.post("/updatebook", updateBook)
router.post("/deletebook", deleteBook)
module.exports=router;