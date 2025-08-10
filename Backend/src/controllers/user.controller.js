import { User } from "../model/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import {ApiError} from '../utils/ApiError.js'


const registerController = AsyncHandler(async(req, res) => {
    const {username, email,phone_no ,password} = req.body

    const existedUser = User.findOne({
        $or: [{username},{email}]
    }) 

    if(existedUser){
        throw new ApiError(401,"user already exists")
    }

    const user = await User.create({username,email,phone_no,password})

    if(!user) {
        throw new ApiError(
            400,
            "something went wrong while creating user");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "User"
        )
    )
})

const loginUser = AsyncHandler(async(req,res)=>{
    const {username , email , password} = req.body

    if(!(username && email)){
        throw new ApiError(
            400,"username or email is not entered"
        )
    }

    const user = User.findOne({
        $or: [{username},{email}]
    })

    if(!user){
        throw new ApiError(404, "user doesn't exists")
    }

    // const isPasswordCorrect = user.isPasswordCorrect(password);

    // if(!isPasswordCorrect){
    //     throw new ApiError(404,"password is incorrect");
    // }
})

export {registerController,loginUser}