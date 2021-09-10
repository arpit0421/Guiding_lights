import mongoose from 'mongoose'
// import answer from './answer'
// import user from './user'

const questionSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    _answers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'answer'
        }
    ],
    date:{
        type: Date,
        default: Date.now
    }, 
    likes:{
        type: Number,
        default: 0
    }
})

export default mongoose.models.question || mongoose.model('question', questionSchema)