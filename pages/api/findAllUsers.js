import dbConnect from "../../helpers/dbconnect"
import user from "../../models/user"
dbConnect()
export default async(req,res)=>{
    if(req.method=="GET"){
        const _user = await user.find()
        var data = []
        _user.map((element)=>{
            data.push(element._id.toString())
        })
        
    }
}