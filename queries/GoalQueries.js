import {Goal} from "../models/Goal.js"

export const getAllGoal=async()=>{
    try{
        const allGoal=await Goal.find({});
        return allGoal
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const addGoal=async(GoalData)=>{
    try{
        const newGoal= new Goal(GoalData);
        await newGoal.save();
        return newGoal
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const deleteGoal= async(idToDelete)=>{
    try {
      const deletedGoal = await Goal.findByIdAndRemove(idToDelete);
  
      if (!deletedGoal) {
       throw new Error("Goal not found")
      }
  
      const remainingGoals = await Goal.find({});
  
      return remainingGoals
    } catch (error) {
      console.error(error);
      throw(error)
    }
  }