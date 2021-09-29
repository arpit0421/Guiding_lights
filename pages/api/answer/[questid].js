import dbConnect from "../../../helpers/dbconnect"
import question from "../../../models/question"

dbConnect();

export default async(req, res)=>{
    try {
        const {questid} = req.query
        const ques = await question.findOne({_id: questid})
        console.log(ques);
        res.status(200).json(ques)
        
    } catch (error) {
        console.log(error)
    }
}
