const Book=require("../models/bookModel")


module.exports.getAllBooks=async(req, res)=>{
    try{
        console.log("get all books")
        const allBooks=await Book.findAll({})
        res.json(allBooks)

    }catch(err){
        console.log(err)
        res.json(err)
    }

}

module.exports.addBook=async(req, res)=>{
    try{

    }catch{
        
    }
}