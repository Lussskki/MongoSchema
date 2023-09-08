import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    // id: {
    //     type: _id,
    //     required: true,
    //     unique: true
    // },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    }
}) 
 
const user = mongoose.model('User',userSchema)

export default user