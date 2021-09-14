import mongoose from 'mongoose'
// import answer from './answer'
// import user from './user'

const questionSchema = new mongoose.Schema({
    quest:{
        type: String,
        required: [true, 'quest is required']
    },
    postedBy:{
        type: String,
        // required: [true, 'posted by is required']
    },
    answer:[
        {
            answer: String,
            name: String 
        }
    ],
    likes:{
        type: Number,
        default: 0
    }
}, {timestamps:true
})

export default mongoose.models.question || mongoose.model('question', questionSchema)