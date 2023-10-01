
import {Exercise} from "../models/Exercise.js";


export const addExercise=async(ExerciseData)=>{
    try{
        const newExercise= new Exercise(ExerciseData);
        await newExercise.save();
        return newExercise
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const getAllExercise=async()=>{
    try{
        const allExercise=await Exercise.find({});
        return allExercise
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const deleteExercise= async(idToDelete)=>{
    try {
      const deletedExercise = await Exercise.findByIdAndRemove(idToDelete);
  
      if (!deletedExercise) {
       throw new Error("Exercise not found")
      }
  
      const remainingExercises = await Exercise.find({});
  
      return remainingExercises
    } catch (error) {
      console.error(error);
      throw(error)
    }
  }