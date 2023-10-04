import React, { useState } from "react";
import ExerciseTable from "../components/ExerciseTable";
import AddExerciseModal from "../components/AddExerciseModal";


const ExercisePage = () => {
  const [showExerciseModal,setExerciseModal]=useState(false);
  

  return (
    <div className="mx-8 h-screen flex flex-col items-center justify-center">
      <div>
        <button className="text-white bg-black p-2 rounded font-semibold" onClick={()=>setExerciseModal(true)}>Add Exercise</button>
      </div>
      {showExerciseModal && <AddExerciseModal setExerciseModal={setExerciseModal}/>}
      <div className="flex-1"></div>
      <div className="w-full bg-white rounded shadow-xl mb-2 px-1 py-5 flex justify-center relative bottom-0">
      <ExerciseTable/>
      </div>
    </div>
  );
};

export default ExercisePage;
