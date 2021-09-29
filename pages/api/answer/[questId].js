import dbConnect from "../../../helpers/dbconnect"
import question from "../../../models/question"

dbConnect();

export default async(req, res)=>{
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
//hello
