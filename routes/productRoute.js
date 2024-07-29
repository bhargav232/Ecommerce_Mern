import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController, getSingleProductController,productPhotoController } from "../controllers/productController.js";
import formidableMiddleware from "express-formidable"


const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin,formidableMiddleware(), createProductController);

// Fetch All Products
router.get('/get-product', getProductController)


// Fetch Single Product
router.get('/get-product/:slug', getSingleProductController)

// Api for photo retrival
router.get('/product-photo/:pid', productPhotoController)

export default router;