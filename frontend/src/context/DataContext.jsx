import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExerciseData } from "../services/GetExerciseData";
import { GetFoodData } from "../services/GetFoodData";
import { GetGoalData } from "../services/GetGoalData";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const CaloriesBurned=store.ExerciseData.reduce((total,crr)=>total+crr.CaloriesBurned,0);
  const CaloriesConsumed=store.FoodData.reduce((total,crr)=>total+crr.Calories,0);
  const TotalCalorieGoal=store.GoalData.reduce((total,crr)=>total+crr.TargetCaloriesValue,0)
  console.log(store)
  console.log({CaloriesBurned})
  console.log({CaloriesConsumed})
  console.log({TotalCalorieGoal})

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




// {
//   "_id": "65188e161cef14e38f547c53",
//   "ExerciseName": "Running",
//   "Duration": 30,
//   "CaloriesBurned": 300,
//   "__v": 0,
//   "createdAt": "2023-10-04T19:33:41.314Z"
// }
// {
//   "_id": "651919180d4ba93d3aa49001",
//   "FoodName": "Chicken Breast",
//   "Calories": 165,
//   "Protein": 31,
//   "Carbohydrates": 0,
//   "Fat": 3.6,
//   "createdAt": "2023-10-01T07:00:40.307Z",
//   "__v": 0
// }
// {
//   "_id": "651db86e460cb33adc352ba3",
//   "GoalName": "Lose Weight",
//   "GoalDescription": "Achieve a healthy weight",
//   "TargetDate": "2023-12-31T00:00:00.000Z",
//   "TargetCaloriesValue": "1500",
//   "Status": "In Progress",
//   "createdAt": "2023-10-04T19:09:34.743Z",
//   "__v": 0
// }

