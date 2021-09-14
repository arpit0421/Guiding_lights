import { parseCookies } from "nookies"
import Cookie from 'cookie'
import dbConnect from "../../helpers/dbconnect"
import router from "next/router"
import question from '../../models/question'

dbConnect()

export default async(req,res)=>{

    try {

        // console.log(typeof(req.body.quest))

        const Question = await new question({
            quest: req.body.quest,
            postedBy: req.body.postedBy,
            likes: req.body.likes
            
        }).save()

        console.log(Question)
        console.log(req.body.quest)
        
        res.status(201).json({message:"question saved"})

    } catch (error) {
        console.log(error)
    }
}
