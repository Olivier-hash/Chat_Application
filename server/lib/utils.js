import jws from "jsonwebtoken";

//Function to generate a token for a user
export const generateToken = (userId)=>{
    const token = jws.sign({userId}, process.env.JWT_SECRET );
    return token;
}