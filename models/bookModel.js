const db=require("../connectDB/db")
const Sequelize=require("sequelize")

const bookModel=db.define("book", {
    title:{type:Sequelize.STRING, allowNull:false},
    year:{type:Sequelize.NUMBER, defaultValue:0},
    description:{type:Sequelize.STRING, defaultValue:"Undescribed"}
})

bookModel.sync().then(()=>{
    console.log("Book model synced successfullly")
}).catch((err)=>{
    console.log("Error syncing bookmodel")
})

module.exports=bookModel