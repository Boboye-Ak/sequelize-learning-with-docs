const db=require("../connectDB/db")
const Sequelize=require("sequelize")

const bookModel=db.define("book", {
    title:{type:Sequelize.STRING},
    year:{type:Sequelize.NUMBER},
    description:{type:Sequelize.STRING}
})

bookModel.sync().then(()=>{
    console.log("Book model synced successfullly")
}).catch((err)=>{
    console.log("Error syncing bookmodel")
})

module.exports=bookModel