import dbConnect from "../../../helpers/dbconnect"
import question from "../../../models/question"

dbConnect();

export default async(req, res)=>{
    switch(req.method)
    {
        case "GET":
            getAnswer(reeq, res)
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
        const ans = ques.answer
        console.log(ans);
        res.status(200).json(ans)
        
    } catch (error) {
        console.log(error)
    }
}

const postAnswer = async(req, res)=>{
    try {
        const data = JSON.parse(req.body)
        const ques = await question.findOne({_id: questid})
        const ans = {name: data.name, answer: data.answer}
        ques.answer.append(ans)
        ques.save()
        console.log(ques)

    } catch (error) {
        console.log(error)
    }
}

