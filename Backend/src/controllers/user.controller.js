import { User } from "../model/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";


const registerController = AsyncHandler(async(req, res) => {
    const {username, email, password} = req.body

    const user = await User.create({username,email,password})

    if(!user) {
        throw new Error("Hello");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "User"
        )
    )
})

export {registerController}