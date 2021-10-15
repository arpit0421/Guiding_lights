import dbConnect from "../../helpers/dbconnect"
import question from "../../models/question"
dbConnect()
export default async(req,res)=>{
    if(req.method == "PUT"){
        var quest = await question.findOne({_id:req.body.questId})
        if(!quest.likes.includes(req.body._id)){
            quest.likes.push(req.body._id)
            const likesChanged = await quest.save()
            res.status(201).json({likes : likesChanged.likes})

        }
        else{  
            quest.likes = quest.likes.filter(function(ele){ 
                return ele != req.body._id; 
            });
            const likesChanged = await quest.save()
            res.status(201).json({likes : likesChanged.likes})
        }
    }
}