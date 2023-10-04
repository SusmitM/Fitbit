import {legacy_createStore as createStore} from "redux";

const initialData={ExerciseData:[],FoodData:[],GoalData:[]};


const reducer=(state=initialData,action)=>{
    switch(action.type){
        case "Add-ExerciseData":{
            return {...state,ExerciseData:[...action.data]}
        };
        case "Add-FoodData":{
            return {...state,FoodData:[...action.data]}
        };
        case "Add-GoalData":{
            return {...state,GoalData:[...action.data]}
        }

        default:
            return state
    }
}

const store=createStore(reducer)

export default store;