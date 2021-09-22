import dbConnect from "../../../helpers/dbconnect";
import question from "../../../models/question";

dbConnect();

export default async(req, res)=>{
    const {questId} = req.query
    const ques = await question.findOne({_id: questId})
    const ans = ques.answer
    res.status(200).json(ans)
} 