import React, { useState } from "react";
import { AddExerciseData } from "../services/AddExerciseData";
import { useDataContext } from "../context/DataContext";

const AddExerciseModal = ({setExerciseModal}) => {
  const {fetchExerciseData}=useDataContext()
  const [formData,setFormData]=useState({exerciseName:"",exerciseDuration:"",exerciseType:"Cardio"});

  const handelSubmit=async (event)=>{
    event.preventDefault();
    
    const receivedData={
      ExerciseName:formData.exerciseName,
      Duration: formData.exerciseDuration,
      CaloriesBurned: formData.exerciseType==="Cardio"? 300 :100,

    }
    const apiResponse=await AddExerciseData(receivedData);
    if(apiResponse){
      alert("Exercise Has Been Added")
      fetchExerciseData()
    }
    else{
      alert("Error: Exercise Could Not Be Added")
    }
    setExerciseModal(false)
    setFormData({exerciseName:"",exerciseDuration:"",exerciseType:"Cardio"});
   
  }
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10">
      <div className="border w-72 p-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handelSubmit}>
          <div className="mb-6">
            <label
              for="exerciseName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Exercise Name:
            </label>
            <input
              type="text"
              id="exerciseName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
              placeholder="Add Exercise"
              required
              onChange={e=>setFormData(prev=>{return {...prev,exerciseName:e.target.value}})}
            />
          </div>
          <div className="mb-6">
            <label
              for="exerciseDuration"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Exercise Duration (Mins):
            </label>
            <input
              type="number"
              id="exerciseDuration"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Add Exercise Duration"
              required
              onChange={e=>setFormData(prev=>{return {...prev,exerciseDuration:e.target.value}})}
            />
          </div>
          <div className="mb-6">
            <label
              for="exerciseType"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Exercise Type:
            </label>
            <select
              id="exerciseType"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e=>setFormData(prev=>{return {...prev,exerciseType:e.target.value}})}
              
            >
              <option selected value="Cardio">Cardio</option>
              <option value="Weight-Training">Weight Training</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <button
            onClick={()=>setExerciseModal(false)}
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default AddExerciseModal;
