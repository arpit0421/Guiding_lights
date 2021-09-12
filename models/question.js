import mongoose from 'mongoose'
// import answer from './answer'
// import user from './user'

const questionSchema = new mongoose.Schema({
    quest:{
        type: String,
        required: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    answer:[
        {
            answer: String
        }
    ],
    likes:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {timestamps:true
})

export default mongoose.models.question || mongoose.model('question', questionSchema)