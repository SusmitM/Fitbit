import React, { useState } from 'react'
import GoalTable from '../components/GoalTable'
import AddGoalModal from '../components/AddGoalModal'

const GoalPage = () => {
  const [showGoalModal,setShowGoalModal]=useState(false)
  return (
    <div className="mx-8 h-screen flex flex-col items-center justify-center">
    <div  className="mt-4">
      <button className="text-white bg-black p-2 rounded font-semibold" onClick={()=>setShowGoalModal(true)}>Add Goal</button>
    </div>
    {showGoalModal && <AddGoalModal setShowGoalModal={setShowGoalModal}/>}
    <div className="flex-1"></div>
    <div className="w-full bg-white rounded shadow-xl mb-2 px-1 py-5 flex justify-center relative bottom-0">
   <GoalTable/>
    </div>
  </div>
  )
}

export default GoalPage