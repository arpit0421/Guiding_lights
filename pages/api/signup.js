import dbConnect from '../../helpers/dbconnect'
import user from '../../models/user'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

dbConnect()

export default async(req, res)=>{

    // const {name, department, email, password, role} = req.body
    try {
        
        if(!req.body.name || !req.body.email || !req.body.password)
        {
            return res.status(422).json({error:"Please provide all details"})
        }

        const User = await user.findOne({email: req.body.email})
        if(User)
        {
            return res.status(422).json({error: "Email already registered, Login Instead"})
        }
        
        {/*const User = await user.findOne({email: req.body.email},(error,user)=>{
            if(User){
                console.log(User);
                return res.status(422).json({error:"Email already registered"})
                
            }
        })*/}


        // const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await new user({
            name: req.body.name,
            department: req.body.department,
            email: req.body.email,
            password: hashedPassword,
            studentSelector:req.body.studentSelector,
            guidingSelector:req.body.guidingSelector
        }).save()

        console.log(newUser)
        res.status(201).json({message:"SignUp successful"})

    } 
    catch (error) {
        console.log(error)
    }
}

// export default signUp