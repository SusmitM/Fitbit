import mongoose from "mongoose";

const ExerciseSchema=new mongoose.Schema({
    ExerciseName:{
        type:String,
        required:true
    },
    Duration:{
        type:Number,
        required:true
    },
    CaloriesBurned:{
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})
export const Exercise=new mongoose.model('Exercise',ExerciseSchema)
