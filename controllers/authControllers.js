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

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Missing required fields"
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email not registered"
            });
        }

        const result = await comparePassword(password, user.password);

        if (!result) {
            return res.status(401).send({
                success: false,
                message: "Incorrect Password"
            });
        }

        // Create JWT token
        const token = JWT.sign({ id: user._id }, process.env.SECRET, { expiresIn: "8d" });

        req.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role 
        };

        console.log(req.user); // Debugging line


        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
              },
              token,
            
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};


export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };