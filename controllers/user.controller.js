import User from '../models/users.model.js'

//get all the users
export const  getUsers=async (req,res,next)=>{

    try {
        const users= await User.find();
        res.status(200).json({
            success:true,
            data:users
        })

    } catch (error) {
    next(error)    
    }
}

//gets a specific user
export const  getUser=async (req,res,next)=>{

    try {
        const user= await User.findById(req.params.id).select('-password');
        if (!user){
            const error = new Error('User not found');
             error.StatusCode=404;
             throw error;
        }
        res.status(200).json({
            success:true,
            data:user
        })

    } catch (error) {
    next(error)    
    }
}