import { parseCookies } from "nookies"
import Cookie from 'cookie'
import dbConnect from "../../helpers/dbconnect"
import router from "next/router"
import question from '../../models/question'

dbConnect()

export default async(req,res)=>{

    try {

        // console.log(typeof(req.body.quest))
        const data = JSON.parse(req.body)
        const Question = await new question({
            quest: data.quest,
            postedBy: data.postedBy,
            likes: data.likes,
            
        }).save()

        // console.log(Question)
        console.log(JSON.parse(req.body))
        
        res.status(201).json({message:"question saved"})

    } catch (error) {
        console.log(error)
    }
}
