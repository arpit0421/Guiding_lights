// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../helpers/dbconnect"
import user from "../../models/user"
import question from  "../../models/question"

dbConnect()

export default (req, res)=>{
  user.find().then(users=>{
    res.status(200).json(users)
  })
}


