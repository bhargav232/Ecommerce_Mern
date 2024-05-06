import userModel from "../models/userModels.js"
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import  JWT  from "jsonwebtoken";
import dotenv from  "dotenv";
import userModels from "../models/userModels.js";
dotenv.config();

export const registerController = async(req, res)=>{

    try{
        const{ name, email, password, phone, address, role, answer} = req.body;

        console.log(name, email, password, phone, address, answer)

        if(!name && !email && !password && !phone && !address && !answer )
        {
            return res.send({
                Message: "All required field are missing",
                success: false
              });

        }

        if (!name) {
            return res.send({
              Message: "Name field is required",
              success: false
            });
          }
          
          if (!email) {
            return res.send({
              Message: "Email field is required",
              success: false
            });
          }
          
          if (!password) {
            return res.send({
              Message: "Password field is required",
              success: false
            });
          }
          
          if (!phone) {
            return res.send({
              Message: "Phone field is required",
              success: false
            });
          }
          
          if (!address) {
            return res.send({
              Message: "Address field is required",
              success: false
            });
          }
          if (!answer) {
            return res.send({
              Message: "Answer field is required",
              success: false
            });
          }
          
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
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
            address,
            answer
        }).save()

        res.status(200).send({
            success: true,
            Message: "user register sucessfully",
            user
        })
    }
    catch(error)
    {
        res.status(500).send({
            success: false,
            Message: "Error while registering user",
            error
        })
        console.log(error.message)
    }
  
}

export const loginController = async (req, res) => {
  console.log("inside login controller")
    try {
        const { email, password } = req.body;
        console.log(req.body)

        if (!email && !password) {
          return res.send({
            Message: "All required field are missing",
            success: false
          });
        }

        if (!email) {
          return res.send({
            Message: "Email field is required",
            success: false
          });
        }
        
        if (!password) {
          return res.send({
            Message: "Password field is required",
            success: false
          });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                Message: "Email not registered"
            });
        }

        const result = await comparePassword(password, user.password);

        if (!result) {
            return res.status(401).send({
                success: false,
                Message: "Incorrect Password"
            });
        }

        // Create JWT token
        const token = JWT.sign({ id: user._id }, process.env.SECRET, { expiresIn: "8d" });
        console.log(token);

        req.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role 
        };

        res.status(200).send({
            success: true,
            Message: "Login successful",
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
            Message: error.message
        });
    }
};


export const forgetPasswordController = async(req, res)=>{

  console.log("I am here in forgotpassword cntroller")


  try{
    const {email, answer, newPassword} = req.body
    console.log(email, answer, newPassword)

    if(!email){
       return res.status(400).send({Message:"Email is required!"})
    }
    if(!answer){
      return res.status(400).send({Message:"Answer is required!"})
   }
   if(!newPassword){
    return res.status(402).send({Message:"Newpassword is required!"})
   }

   const user = await userModel.findOne({email, answer})
   console.log(user)

   if(!user){
    return res.status(400).send({
      Message: "No User Found"
    })
   }
   const hpwd = await hashPassword(newPassword);
   await userModel.findByIdAndUpdate(user._id, {password:hpwd})
    return res.status(200).send({
      success:true,
      Message: "password updated sucessfully"
    })
  }
  catch(error){
    console.log("Error in forgot password", error.message)
    return res.status(500).send({
      Message: error.Message,
      sucess: false
    })
  }
}
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };