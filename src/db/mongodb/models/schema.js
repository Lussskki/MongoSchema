import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
}) 
 
const user = mongoose.model('user',userSchema)

export default user