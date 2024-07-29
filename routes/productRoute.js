import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController } from "../controllers/productController.js";
import formidableMiddleware from "express-formidable"


const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin,formidableMiddleware(), createProductController);

router.get('/get-product', getProductController)

export default router;