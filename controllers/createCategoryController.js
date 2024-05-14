import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";


export const createCategoryController =  async(req, res)=>{

    try{
        const {name} = req.body;

        if(!name) return res.status(401).send("Name of category is required!")
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
           return res.status(200).send({
                sucess: false,
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




    
