import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExerciseData } from "../services/GetExerciseData";
import { GetFoodData } from "../services/GetFoodData";
import { GetGoalData } from "../services/GetGoalData";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

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
      value={{ fetchExerciseData, fetchFoodData, fetchGoalData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);