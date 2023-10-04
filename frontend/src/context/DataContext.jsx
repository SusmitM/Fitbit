import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExerciseData } from "../services/GetExerciseData";
import { GetFoodData } from "../services/GetFoodData";
import { GetGoalData } from "../services/GetGoalData";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [selectedTab,setSelectedTab]=useState("dashboard");

  const CaloriesBurned=store.ExerciseData.reduce((total,crr)=>total+crr.CaloriesBurned,0);
  const CaloriesConsumed=store.FoodData.reduce((total,crr)=>total+crr.Calories,0);
  const TotalCalorieGoal=store.GoalData.reduce((total,crr)=>total+crr.TargetCaloriesValue,0)
  

  const fetchExerciseData = async () => {
    const data = await GetExerciseData();
    dispatch({
      type: "Add-ExerciseData",
      data: data,
    });
  };
  const fetchFoodData = async () => {
    const data = await GetFoodData();
    dispatch({
      type: "Add-FoodData",
      data: data,
    });
  };
  const fetchGoalData = async () => {
    const data = await GetGoalData();
    dispatch({
      type: "Add-GoalData",
      data: data,
    });
  };
  useEffect(() => {
    fetchExerciseData();
    fetchFoodData();
    fetchGoalData();
  }, []);

  return (
    <DataContext.Provider
      value={{selectedTab,setSelectedTab, fetchExerciseData, fetchFoodData, fetchGoalData,CaloriesBurned,CaloriesConsumed,TotalCalorieGoal}}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);


