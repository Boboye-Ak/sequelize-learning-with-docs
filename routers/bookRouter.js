const express=require("express");
const { getAllBooks, addBook, findBook, updateBook, deleteBook } = require("../controllers/bookController");
const router=express.Router()


router.get("/", getAllBooks)
router.get("/allbooks", getAllBooks)
router.post("/addbook", addBook)
router.get("/findbook", findBook)
router.put("/updatebook/:id", updateBook)
router.delete("/deletebook/:id", deleteBook)
module.exports=router;