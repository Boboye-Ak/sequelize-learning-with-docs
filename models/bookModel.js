const db=require("../connectDB/db")
const Sequelize=require("sequelize")

const bookModel=db.define("book", {
    title:{type:Sequelize.STRING},
    year:{type:Sequelize.NUMBER},
    description:{type:Sequelize.STRING}
})

module.exports=bookModel