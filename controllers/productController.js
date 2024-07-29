import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs"



export const createProductController =  async(req, res)=>{

    try{

    const {name, slug, description,price, category, quantity, shipping} = req.fields
    const {photo} = req.files

    switch(true){
        case !name:
          return res.status(500).send({error: "Name is required field!"})
        case !description:
          return res.status(500).send({error: "description is required field!"})
        case !price:
          return res.status(500).send({error: "price is required field!"})
        case !category:
          return res.status(500).send({error: "category is required field!"})
        case !quantity:
          return res.status(500).send({error: "Name is required field!"})
        case !photo && photo.size > 1000000:
         return res.status(500).send({error: "Photo is required and size is less than 1mb"})

    }
    
    const products = await productModel({...req.fields, slug:slugify(name)})
    if(products.photo){
        products.photo.data = fs.readFileSync(photo.path)
        products.photo.contentType = photo.type
    }

    await products.save()
    res.status(200).send({
        success: true,
        Message: "New product is created successfully!",
        products
    })

    }
    catch(err){
        console.log(err.message);
        res.status(500).send(
            {
                sucess: false,
                Message: "Error while creating product",
                error: err.message
            }
        )

    }
}

export const getProductController =  async(req, res)=>{

  try{
    // creating multiple Api's as photo may take more time for retrival!
      const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAT: -1})
      res.status(200).send({
        success: true,
        Message: "Fetch multiple-products runs successfully!",
        Products_Total: products.length,
        products
    })

  }
  catch(err){
    console.log(err.message);
    res.status(500).send(
        {
            sucess: false,
            Message: "Error while fetching products",
            error: err.message
        }
    )

}
}

export const getSingleProductController =  async(req, res)=>{

  try{
    
     const product = await productModel.find({slug:req.params.slug}).populate('category').select("-photo").limit(12).sort({createdAT: -1})
     res.status(200).send({
      success: true,
      Message: "Fetch single-product runs successfully!",
      product
  })

  }
  catch(err){
    console.log(err.message);
    res.status(500).send(
        {
            sucess: false,
            Message: "Error while fetching single-product",
            error: err.message
        }
    )

}

}


export const productPhotoController =  async(req, res)=>{

  try{

        const product_photo = await productModel.findById(req.params.pid).select("photo") 
        if(product_photo.photo.data){
          res.set("Content-type", product_photo.contentType);
          return res.status(200).send(product_photo.photo.data);

        }
  }
  catch(err){
    console.log(err.message);
    res.status(500).send(
        {
            sucess: false,
            Message: "Error while fetching product-photo",
            error: err.message
        }
    )

}

}