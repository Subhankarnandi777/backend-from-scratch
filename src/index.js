import dotenv from "dotenv";
import dns from "node:dns";
import connectDB from "./db/index.js";
import { log } from "node:console";


dotenv.config({
    path: './.env'
})

dns.setServers([process.env.MONGODB_DNS_SERVER || "1.1.1.1"])

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured in .env")
}

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running at port :  ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!" , err);
    
})














/*
import express from "express";
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("ERROR" , error);
            throw error   
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error" , error);
        throw err
    }
})()

*/