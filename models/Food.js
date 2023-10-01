import mongoose from "mongoose";

const FoodSchema=new mongoose.Schema({
    FoodName:{
        type:String,
        required:true
    },
    Calories:{
        type:Number,
        required:true
    },
    Protein:{
        type:Number,
        required:true
    },
    Carbohydrates:{
        type:Number,
        required:true
    },
    Fat:{
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})

export const Food=mongoose.model('Food',FoodSchema)