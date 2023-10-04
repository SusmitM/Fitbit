import React, { useState } from 'react'
import FoodTable from '../components/FoodTable'
import AddFoodModal from '../components/AddFoodModal';

const FoodPage = () => {
  const [showFoodModal,setShowFoodModal]=useState(false);
  return (
    <div className="mx-8 h-screen flex flex-col items-center justify-center">
    <div  className="mt-4">
      <button className="text-white bg-black p-2 rounded font-semibold" onClick={()=>setShowFoodModal(true)}>Add Food</button>
    </div>
    {showFoodModal && <AddFoodModal setShowFoodModal={setShowFoodModal}/>}
    <div className="flex-1"></div>
    <div className="w-full bg-white rounded shadow-xl mb-2 px-1 py-5 flex justify-center relative bottom-0">
   <FoodTable/>
    </div>
  </div>
  )
}

export default FoodPage