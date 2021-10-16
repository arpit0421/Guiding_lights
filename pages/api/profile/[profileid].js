import user from "../../../models/user"

export default async(req, res)=>{
    if(req.method == "GET")
    {
        try {
            const {profileid} = req.query
            const _user = await user.findOne({_id: profileid})
            console.log(_user)
            res.status(200).json(_user)

        } 
        catch (error) {
            console.log(error)
        }
    }
}