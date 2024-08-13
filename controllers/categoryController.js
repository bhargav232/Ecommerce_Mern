import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";


export const createCategoryController =  async(req, res)=>{

    try{
        const {name} = req.body;

        if(!name) return res.status(401).send("Name of category is required!")
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
           return res.status(200).send({
                success: false,
                Message: "category already exists!"
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save();
        res.status(200).send({
            success: true,
            Message: "New category is created successfully!",
            category
        })

    }

    catch(err){
        console.log(err.message);
        res.status(500).send(
            {
                sucess: false,
                Message: "Error in Category"
            }
        )

    }
}

export const updateCategoryController =  async(req, res)=>{
    try{
        const {name} = req.body;
        const {id} = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)}, {new:true});
        res.status(200).send({
            success: true,
            Message: "update category successfully!",
            category
        })

    }
    catch(err){
        console.log(err.message);
        res.status(500).send(
            {
                sucess: false,
                err,
                Message: "Error while updating Category"
            }
        )

    }
}

export const getallCategoryController = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All category list",
            category: categories  
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            success: false,
            error: err.message,  
            message: "Error while fetching all categories"
        });
    }
};
export const getsinglecategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({slug: req.params.slug});
        res.status(200).send({
            success: true,
            message: "Get single category successfully",
            category  
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            success: false,
            error: err.message,  
            message: "Error while fetching single categories"
        });
    }
};


export const deleteCategoryController =  async(req, res)=>{
    try{
        
        const {id} = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            Message: "delete category successfully!",
            category
        })

    }
    catch(err){
        console.log(err.message);
        res.status(500).send(
            {
                sucess: false,
                err,
                Message: "Error while deleting Category!"
            }
        )

    }
}