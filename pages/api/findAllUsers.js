import dbConnect from "../../helpers/dbconnect"
import user from "../../models/user"
dbConnect()
export default async(req, res)=>{
    if(req.method=="GET"){
        const _user = await user.find()
        
        // let data = _user.map((element)=>{
        //     data.push(element._id.toString())
        // })
        // console.log(data)
        res.status(200).json(_user)
    }
}