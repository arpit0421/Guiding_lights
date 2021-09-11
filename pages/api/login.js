import dbConnect from "../../helpers/dbconnect";
import bcrypt from 'bcryptjs'
import user from '../../models/user'
import jwt from 'jsonwebtoken'


dbConnect()

export default async(req, res)=>{

    const {email, password} = req.body
    try{
        if(!email || !password){
            res.status(422).json({error:"Input all fields"})
            return
        }
    
        const User = await user.findOne({email: email})
        if(!User){
            res.status(422).json({error:"User not found"})
            return
        }
    
        const matchPassword = await bcrypt.compare(User.password, password)
        if(matchPassword){
            const token = jwt.sign({userId: User._id}, process.env.JWT_SECRET, {
                expiresIn:"2d"
            })
            res.status(201).json({token}) 
        }
        else{
            res.status(422).json({error:"email or password don't match"})
            return
        }
    }
    catch(err){
        console.log(err)
    }
    

} 