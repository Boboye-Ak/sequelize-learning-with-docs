require("dotenv").config()
const express=require("express")
const bookRouter=require("./routers/bookRouter")
const db=require("./connectDB/db")



const dbauth=async ()=>{
    try{
        await db.authenticate()
        console.log("Database connected successfully")

    }catch (err){
        console.log("failed to connect to DB")
    }


}

dbauth()


const app=express()

app.use("/books", bookRouter)

//Middleware
app.use(express.json())

app.get("/", (req, res)=>{
    console.log("Hello World")
    res.send("Hello world")
})



app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})