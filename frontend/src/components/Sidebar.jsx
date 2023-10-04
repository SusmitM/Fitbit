import React from 'react'
import {RxDashboard} from 'react-icons/rx';
import {CgGym} from 'react-icons/cg';
import {PiBowlFoodFill} from 'react-icons/pi';
import {GoGoal} from 'react-icons/go';
import {BsGithub} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';

const Sidebar = () => {
  const {selectedTab,setSelectedTab}=useDataContext();
    const navigate=useNavigate();
  return (
    <div className="bg-black text-slate-200 w-1/6 text-center">
    <ul  className='flex flex-col h-screen justify-evenly font-medium font-sans'>
      
      <li onClick={()=>{navigate("/");setSelectedTab("dashboard")}} className={selectedTab==="dashboard"? "flex flex-wrap justify-center gap-2 cursor-pointer bg-blue-700 p-4 rounded-lg":"flex flex-wrap justify-center gap-2 p-4 cursor-pointer"}><span ><RxDashboard size={20}/></span>Dashboard</li>
     
      <li onClick={()=>{navigate("/exercise");setSelectedTab("exercise")}}className={selectedTab==="exercise"? "flex flex-wrap justify-center gap-2 cursor-pointer bg-blue-700 p-4 rounded-lg":"flex flex-wrap justify-center gap-2 p-4 cursor-pointer"}><span ><CgGym size={20}/></span>Exercise Tracking</li>
     
      <li onClick={()=>{navigate("/food");setSelectedTab("food")}}className={selectedTab==="food"? "flex flex-wrap justify-center gap-2 cursor-pointer bg-blue-700 p-4 rounded-lg":"flex flex-wrap justify-center gap-2 p-4 cursor-pointer"}><span><PiBowlFoodFill size={20}/></span>Food Tracking</li>
      
      <li onClick={()=>{navigate("/goal");setSelectedTab("goal")}}className={selectedTab==="goal"? "flex flex-wrap justify-center gap-2 cursor-pointer bg-blue-700 p-4 rounded-lg":"flex flex-wrap justify-center gap-2 p-4 cursor-pointer"}><span><GoGoal size={20}/></span>Goal Tracking</li>
     
      <li className="flex flex-wrap justify-center gap-2 p-4 cursor-pointer"><span><BsGithub size={20}/></span> <Link to="https://github.com/SusmitM/Fitbit" target="_blank">Github</Link></li>
     
    </ul>
  </div>
  )
}

export default Sidebar