import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        phone_no:{
            type:Number,
        },
        password:{
            type:String,
            required:true
        }
    }
)

const User = mongoose.model("User",userSchema)
export {User}