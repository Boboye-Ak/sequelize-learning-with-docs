const {Sequelize}=require("sequelize")

const db = new Sequelize(`postgres://postgres:${process.env.dbpass}@localhost/Books`)

module.exports=db