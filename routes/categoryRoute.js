import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, updateCategoryController, getallCategoryController, 
getsinglecategoryController, deleteCategoryController } from "../controllers/categoryController.js"

const router = express.Router()

// create category
router.post("/create-category", requireSignIn, isAdmin, createCategoryController)

// update category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController)

// get all categories
router.get("/get-allcategory",  getallCategoryController)

// get single category
router.get("/single-category/:slug", getsinglecategoryController)

// delete single category
router.delete("/delete-category/:id", deleteCategoryController)

export default router;