import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        default: "student",
        enum: ['student', 'guiding', 'root']
    }

}, 
    {timestamps: true
})

export default mongoose.models.user || mongoose.model('user', userSchema)