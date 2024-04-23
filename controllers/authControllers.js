import userModel from "../models/userModels.js"
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import  JWT  from "jsonwebtoken";
import dotenv from  "dotenv";
dotenv.config();

export const registerController = async(req, res)=>{

    try{
        const{ name, email, password, phone, address, role} = req.body;

        if(!name || !email || !password || !phone || !address ){
             return res.send({
                Error: "Missing required Field"
            })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            res.status(200).send({
                sucess: true,
                Message: "User already exist please login"
            })
        }
        const hpwd = await hashPassword(password);
        const user = await new userModel({
            name, 
            email, 
            password:hpwd, 
            phone, 
            address
        }).save()

        res.status(200).send({
            Sucess: true,
            Message: "user register sucessfully",
            user
        })
    }
    catch(error)
    {
        res.status(500).send({
            Sucess: false,
            Message: "Error while registering user",
            error
        })
    }
}

export const loginController = async(req, res)=>{

    try{
        const{ email, password} = req.body;

        if( !email || !password  ){
             return res.send({
                Error: "Missing required Field"
            })
        }
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            res.status(200).send({
                sucess: false,
                Message: "Email not registered"
            })
        }
        const result = await comparePassword(password, existingUser.password);
        if(!result){
            res.status(404).send({
                sucess: false,
                Message: "Incorrect Password"
            })
        }
        const token =  JWT.sign({id: existingUser._id}, process.env.SECRET, {expiresIn: "8d"})
        res.status(200).send({
            sucess: true,
            message: "login sucessfully",
            user: {
                name: existingUser.name,
                email: existingUser.email,
            },
            token
        })

    }
    catch(error)
    {
        res.status(500).send({
            Sucess: false,
            Message: error.message
           
            
        })
    }

   

}
