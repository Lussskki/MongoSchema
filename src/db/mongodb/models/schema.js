import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String, // Add the name field
        trim: true,
    },
    lastname: {
        type: String, // Add the lastname field
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
}) 
 
const user = mongoose.model('user',userSchema)

export default user