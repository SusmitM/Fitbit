import React, { useState } from 'react'
import { AddFoodData } from '../services/AddFoodData';
import { useDataContext } from '../context/DataContext';

const AddFoodModal = ({setShowFoodModal}) => {
  const {fetchFoodData}=useDataContext()
  const [formData,setFormData]=useState({
    FoodName: "",
    Calories:"",
    Protein: "",
    Carbohydrates: "",
    Fat: ""
  })
  const handelSubmit=async (event)=>{
    event.preventDefault();
    
  
    const apiResponse=await AddFoodData(formData);
    if(apiResponse){
      alert("Food Has Been Added")
      fetchFoodData()
    }
    else{
      alert("Error: Food Could Not Be Added")
    }
    setShowFoodModal(false)
    setFormData({
      FoodName: "",
      Calories:"",
      Protein: "",
      Carbohydrates: "",
      Fat: ""
    });
   
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10">
    <div className="border w-96 p-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form onSubmit={handelSubmit}>
        <div className="mb-6">
          <label
            for="foodName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Food Name:
          </label>
          <input
            type="text"
            id="foodName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Food Item"
            required
            value={formData.FoodName}
            onChange={e=>setFormData(prev=>{return{...prev,FoodName:e.target.value}})}
          />
        </div>
        <div className="mb-6">
          <label
            for="calories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Calories (grams):
          </label>
          <input
            type="number"
            id="calories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Calories"
            required
            value={formData.Calories}
            onChange={e=>setFormData(prev=>{return{...prev,Calories:e.target.value}})}
          />
        </div>
        <div className="mb-6">
          <label
            for="Protein"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Protein (grams):
          </label>
          <input
            type="number"
            id="Protein"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Protein"
            required
            value={formData.Protein}
            onChange={e=>setFormData(prev=>{return{...prev,Protein:e.target.value}})}
          />
        </div>
        <div className="mb-6">
          <label
            for="Carbohydrates"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Carbohydrates (grams):
          </label>
          <input
            type="number"
            id="Carbohydrates"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Carbohydrates"
            required
            value={formData.Carbohydrates}
            onChange={e=>setFormData(prev=>{return{...prev,Carbohydrates:e.target.value}})}
          />
        </div>
        <div className="mb-6">
          <label
            for="Fat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fat (grams):
          </label>
          <input
            type="number"
            id="Fat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Fat"
            required
              value={formData.Fat}
            onChange={e=>setFormData(prev=>{return{...prev,Fat:e.target.value}})}
          />
        </div>
        
        <div className="flex flex-col gap-4">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
          onClick={()=>setShowFoodModal(false)}
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancel
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddFoodModal