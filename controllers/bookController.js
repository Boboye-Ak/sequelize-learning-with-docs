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
        console.log(req.body)
        const {title, year, description}=req.body
        const newBook=await Book.create({
            title, year, description
        })
        res.json({succcess:true, payload:newBook})


    }catch (err){
        console.log(err)
        res.json(err)

    }
}