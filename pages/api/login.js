import dbConnect from "../../helpers/dbconnect";
import bcrypt from 'bcryptjs'
import user from '../../models/user'
import jwt from 'jsonwebtoken'


dbConnect()

export default async(req, res)=>{

    // const {email, password} = req.body
    try{
        if(!req.body.email || !req.body.password){
            res.status(422).json({error:"Input all fields"})
            return
        }
    
        const currUser = await user.findOne({email: req.body.email})
        // console.log(currUser)
        if(!currUser){
            res.status(422).json({error:"currUser not found"})
            return
        }

        const matchPassword = await bcrypt.compare( req.body.password, currUser.password)
        
        // const matchPassword = await bcrypt.compare(currUser.password, req.body.password, (err, matched)=>{
        //     if(err){
        //         console.log(err)
        //         return
        //     }
        //     if(matched){
        //         const token = jwt.sign({userId: currUser._id}, process.env.JWT_SECRET, {expiresIn:"2d"})
        //         console.log(currUser)
        //         res.status(201).json({token})
        //         console.log(token)
        //         return
        //     }else{
        //         return res.status(422).json({error: "email or password don't match"})
        //     }
        // })
        
        if(matchPassword){
            const token = jwt.sign({userId: currUser._id, name: currUser.name, email: currUser.email, dept: currUser.department}, process.env.JWT_SECRET, {
                expiresIn:"2d"
            })
            
            console.log(currUser)
            const {name, _id, email, role} = currUser

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