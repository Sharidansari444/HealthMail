import express from "express";
import { config } from "dotenv";
import {sendemail} from "./utils/sendemail.js"
import cors from "cors";

const app = express()
const router = express.Router()
config({path : "./config.env"});

const corsoptions = {

    origin: "https://heartfelt-salamander-d58c63.netlify.app",
    methods:["POST"],
    credentials:true
}
 
app.use(cors(corsoptions));
app.use(express.json())
app.use(express.urlencoded({extended:  true}))

router.post("/send/mail",async( req,res,next)=>{
    const {name, email, message} = req.body;
    if(!name || !email || !message){
        res.status(500).json({
            success:false,
            message:"please fill the all input fields"})
    }

    try {
        await sendemail({
           
            email: "sharidansari444@gmail.com",
            subject : "THE KGN GYM",
            message,
            useEmail : email ,
            

        })
        res.status(200).json({
            sucess:true,
            message:"message send successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess,
            message:"Internal server error"
        })
        
    }
})
app.use(router)
app.listen(process.env.PORT ,()=>{
    console.log(`server run on port ${process.env.PORT}`)
})
