import express from "express"
import { loginController, registerController, testController } from "../controllers/authControllers.js"
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/register", registerController)

router.post("/login", loginController)

router.get("/test", requireSignIn, isAdmin, testController)


export default router;