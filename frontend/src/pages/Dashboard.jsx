import React from 'react'
import { useDataContext } from '../context/DataContext'
import DataCard from '../components/DataCard';

const Dashboard = () => {
  const{CaloriesBurned,CaloriesConsumed,TotalCalorieGoal}=useDataContext();
  return (
    <div  className='mt-12 grid grid-cols-2 gap-4'>
      <DataCard title="Total Calories Burned" data={CaloriesBurned}/>
      <DataCard title="Total Calories Consumed" data={CaloriesConsumed}/>
      <DataCard title="Total Calories Goal" data={TotalCalorieGoal}/>
      <DataCard title="Remaining Calories to Goal" data={TotalCalorieGoal-CaloriesBurned}/>
    </div>
  )
}

export default Dashboard