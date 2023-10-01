import express from "express";
import {addExercise,deleteExercise,getAllExercise} from "../queries/ExerciseQueries.js"
import {addFood,deleteFood,getAllFood} from "../queries/FoodQueries.js"
import {addGoal,deleteGoal,getAllGoal} from "../queries/GoalQueries.js"
export const apiRouter=express.Router();

apiRouter.get('/',async(req,res)=>{
    res.send('Welcome to API Route')
}
)

apiRouter.get('/exercises',async(req,res)=>{
    try{
        const response= await getAllExercise();
        res.status(200).json({msg:'Fetched Exercise successfully',data:response})
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.post('/exercises',async(req,res)=>{
    const exerciseData=req.body;
    try{
        const response= await addExercise(exerciseData);
        if(response){
            res.status(201).json({msg:'Exercise Added successfully',data:response})
        }else {
            res.status(404).json({ msg: 'Exercise Could Not Be Added' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.delete('/exercises/:exerciseId',async(req,res)=>{
    const {exerciseId}=req.params;
    try{
        const response= await deleteExercise(exerciseId);
        if(response){
            res.status(204).json({msg:'Exercise Deleted',data:response})
        }else {
            res.status(404).json({ msg: 'Exercise not found' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.get('/food',async(req,res)=>{
    try{
        const response= await getAllFood();
        res.status(200).json({msg:'Fetched Food Items successfully',data:response})
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.post('/food',async(req,res)=>{
    const foodData=req.body;
    try{
        const response= await addFood(foodData);
        if(response){
            res.status(201).json({msg:'Food Item Added successfully',data:response})
        }else {
            res.status(404).json({ msg: 'Food Item Could Not Be Added' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.delete('/food/:foodId',async(req,res)=>{
    const {foodId}=req.params;
    try{
        const response= await deleteFood(foodId);
        if(response){
            res.status(204).json({msg:'Food Deleted',data:response})
        }else {
            res.status(404).json({ msg: 'Food not found' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.get('/goals',async(req,res)=>{
    try{
        const response= await getAllGoal();
        res.status(200).json({msg:'Fetched Goals successfully',data:response})
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.post('/goals',async(req,res)=>{
    const goalData=req.body;
    try{
        const response= await addGoal(goalData);
        if(response){
            res.status(201).json({msg:'Goal Added successfully',data:response})
        }else {
            res.status(404).json({ msg: 'Goal Could Not Be Added' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})

apiRouter.delete('/goals/:goalId',async(req,res)=>{
    const {goalId}=req.params;
    try{
        const response= await deleteGoal(goalId);
        if(response){
            res.status(204).json({msg:'Goal Deleted',data:response})
        }else {
            res.status(404).json({ msg: 'Goal not found' });
          }
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:'Internal Server Error',error:err.message})
    }
})


