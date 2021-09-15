import dbConnect from "../../helpers/dbconnect"
import mongoose from 'mongoose'
import question from '../../models/question'

dbConnect()

export default async(req,res)=>{

    try {
        const data = await question.find()
        // data = JSON.parse(data)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(422).json(error,"error occured")
    }
}