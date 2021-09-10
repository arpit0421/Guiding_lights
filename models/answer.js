import mongoose from 'mongoose'
// import user from './user'
// import question from './question'

const answerSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    postedFor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question',
        required: true
    }

})

export default mongoose.models.answer || mongoose.model('answer', answerSchema)