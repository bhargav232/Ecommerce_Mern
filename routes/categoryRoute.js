import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController } from "../controllers/createCategoryController.js";

const router = express.Router()

router.post("/create-category", requireSignIn, isAdmin, createCategoryController)

// router.get("/cat-route", (req,res)=>{
//     res.send("I am get method of category route!")
// })


export default router;