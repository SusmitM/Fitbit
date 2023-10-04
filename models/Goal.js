import mongoose from "mongoose";

const GoalSchema=new mongoose.Schema({
    GoalName:{
        type:String,
        required:true
    },
    GoalDescription:{
        type:String,
        required:true
    },
    TargetDate:{
        type:Date,
        required:true
    },
    TargetCaloriesValue:{
        type:Number,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})
export const Goal=new mongoose.model('Goal',GoalSchema)