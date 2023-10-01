import {Food} from "../models/Food.js"

export const getAllFood=async()=>{
    try{
        const allFood=await Food.find({});
        return allFood
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const addFood=async(FoodData)=>{
    try{
        const newFood= new Food(FoodData);
        await newFood.save();
        return newFood
    }
    catch(error){
        console.error(error);
        throw(error)
    }
}

export const deleteFood= async(idToDelete)=>{
    try {
      const deletedFood = await Food.findByIdAndRemove(idToDelete);
  
      if (!deletedFood) {
       throw new Error("Food not found")
      }
  
      const remainingFoods = await Food.find({});
  
      return remainingFoods
    } catch (error) {
      console.error(error);
      throw(error)
    }
  }