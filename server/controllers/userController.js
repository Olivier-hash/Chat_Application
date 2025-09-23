import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

// Signup a new user
export const signup = async (req,res)=>{
    const {fullName, email, password, bio} = req.body;

    try {
        // 1. Check missing details
        if (!fullName || !email || !password || !bio) {
            return res.json({success: false, message: "Missing Details"})
        }
        
        // 2. Check if user already exist
        const user = await User.findOne({email});
        if (user) {
            return res.json({success: false, message: "Account already exists"})
        }

        // 3. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Create new user
        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        });

        // 5. Generate JWT token
        const token = generateToken(newUser._id)

        res.json({success:true, userData: newUser, token, 
        message: "Account created successfully"})

    } catch (error) {
        console.log(error.message);
        
        res.json({success: false, message: error.message})
    }
}