const Book=require("../models/bookModel")
const {Op}=require("sequelize")


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

module.exports.findBook=async(req, res)=>{
    try{
        const {title, year}=req.query
        let result=[]
        if (title){
            result=await Book.findAll({
                where:{
                    title:{
                        [Op.like]:"%"+title+"%"
                    }
                }
            })

        }

        if (year){
            result=await Book.findAll({
                where:{
                    year:{
                        [Op.eq]:year
                    }
                }
            })
        }

        res.json(result)

    }catch(err){
        console.log(err)
        res.json(err)
    }

}

module.exports.updateBook=async(req, res)=>{
    try{
        const {id}=req.params
        const {title, year, description}=req.body
        const updatedBook=await Book.update({
            title:title,
            year:year,
            description:description
        },{
            where:{
                id:id
            }
        })
        res.json({msg:"Updated successfully", payload:updatedBook})

    }catch(err){
        console.log(err)
        res.json(err)

    }
}


module.exports.deleteBook=async(req, res)=>{
    try{
        const {id}=req.params
        await Book.destroy({
            where:{
                id:id
            }
        })
        res.json({msg:"deleted successfully"})

    }catch(err){
        console.log(err)
        res.json(err)

    }
}