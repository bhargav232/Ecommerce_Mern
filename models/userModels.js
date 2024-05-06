import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim:true,
        require:true
    },
    email:{
        type: String,
        trim:true,
        require:true,
        unique: true

    },
    password:{
        type: String,
        require: true
    },
    phone:{
        type:String,
        require: true,
        unique:true
    },
    address:{
        type: String,
        require: true
    },
    answer:{
        type:String,
        require:true
    },
    role:{
        type:Boolean,
        default: false

    },

},{
    timestamps: true
})

export default mongoose.model("users",userSchema)