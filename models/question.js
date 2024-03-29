import mongoose from 'mongoose'
// import answer from './answer'
// import user from './user'

const questionSchema = new mongoose.Schema({
    quest:{
        type: String,
        required: [true, 'quest is required']
    },
    postedById:{
        type: String,
        required: [true, 'posted by is required']
    },
    postedByName:{
        type: String,
        required: [true, 'postedByName is required']
    },
    answer:[
        {
            answer: String,
            name: String 
        }
    ],
    likes:[]
}, {timestamps:true
})

export default mongoose.models.question || mongoose.model('question', questionSchema)