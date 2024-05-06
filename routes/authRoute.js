import express from "express"
import { loginController, registerController, testController, forgetPasswordController } from "../controllers/authControllers.js"
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/register", registerController)

router.post("/login", loginController)

router.post("/forget-password", forgetPasswordController)

router.get("/test", requireSignIn,  testController)

router.get("/user-auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok:"true"});
})

router.get("/admin-auth", requireSignIn, isAdmin, (req,res)=>{
    res.status(200).send({ok:"true"});
})


export default router;