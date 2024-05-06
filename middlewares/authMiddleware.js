import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/userModels.js"

export const requireSignIn = async (req, res, next) => {
  console.log("inside requireSignIn")
    try {
        const token = req.headers.authorization
        console.log(token)
        if (!token) {
          console.log("no token")
            return res.status(401).send({
                success: false,
                Message: "JWT token is missing"
            });
        }
        const decode = JWT.verify(token, process.env.SECRET);
        req.user = decode;
        console.log(req.user)
        if (decode) {
            next();
        }
    } catch (error) {
        console.log('JWT verification error:', error); 
        res.status(401).send({
            success: false,
            Message: error.message
        });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user.id);
      console.log("user data", user)
      if (user.role !== true) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };