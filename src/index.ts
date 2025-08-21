import express from "express";
export const app=express();
import {prismaClient} from "./db";
app.use(express.json());
app.post("/sum",async(req,res)=>{
    const a=req.body.a;
    const b=req.body.b;
    if(a>=1000000 || b>1000000){
       return res.status(400).json({
            message:"The Number is too long"
        })
    }
    const answer=a+b;
    const value=await prismaClient.request.create({
        data:{
            a:a,
            b:b,
            answer:answer,
            type:"ADD"
        }
    })
return res.json({
    answer,
    id:value.id
})
})