import express from  "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "/Users/yk/Desktop/Booking App/routes/auth.js"


const app = express()
dotenv.config()

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw(error);
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!")
})

app.get("/users",(req,res)=>{
    res.json("hello first request")
})


//middleware
app.use("/auth", authRoute);



app.listen(8000, ()=>{
    console.log("connected to backend.")
})