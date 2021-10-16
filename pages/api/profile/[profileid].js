import dbConnect from "../../../helpers/dbconnect"
import user from "../../../models/user"

dbConnect();

export default async( req, res)=>{
    try {
        const {profileid} = req.query
        const userData = await user.findOne({_id: profileid})
        
        console.log(userData)
        res.statu(200).json(userData)
    }
    catch (error) 
    {
        console.log(error)
    }
}
