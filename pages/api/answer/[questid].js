import dbConnect from "../../../helpers/dbconnect"
import question from "../../../models/question"

dbConnect();

export default async(req, res)=>{
    switch(req.method)
    {
        case "GET":
            getAnswer(req, res)
            break
        case "PUT":
            postAnswer(req, res)
            break
    }
}

const getAnswer = async(req, res)=>{
    try {
        const {questid} = req.query
        const ques = await question.findOne({_id: questid})
        console.log(ques);
        res.status(200).json(ques)
        
    } catch (error) {
        console.log(error)
    }
}

const postAnswer = async(req, res)=>{
    try {
        const data = JSON.parse(req.body)
        const ques = await question.findOne({_id: data.quest_id})
        const ans = {name: data.name, answer: data.answer}
        ques.answer.push(ans)
        ques.save()
        res.status(201).json({message:"done"})
        

    } catch (error) {
        console.log(error)
    }
}

