import React from 'react'
import {RxDashboard} from 'react-icons/rx';
import {CgGym} from 'react-icons/cg';
import {PiBowlFoodFill} from 'react-icons/pi';
import {GoGoal} from 'react-icons/go';
import {BsGithub} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-black text-slate-300 w-1/6 text-center">
    <ul  className='flex flex-col h-screen justify-evenly font-medium font-sans'>
      <li onClick={()=>navigate("/")} className="flex flex-wrap justify-center gap-2 cursor-pointer"><span ><RxDashboard size={20}/></span>Dashboard</li>
      <li onClick={()=>navigate("/exercise")} className="flex flex-wrap justify-center gap-2 cursor-pointer"><span ><CgGym size={20}/></span>Exercise Tracking</li>
      <li onClick={()=>navigate("/food")} className="flex flex-wrap justify-center gap-2 cursor-pointer"><span><PiBowlFoodFill size={20}/></span>Food Tracking</li>
      <li onClick={()=>navigate("/goal")} className="flex flex-wrap justify-center gap-2 cursor-pointer"><span><GoGoal size={20}/></span>Goal Tracking</li>
      <li onClick={()=>navigate("/goal")} className="flex flex-wrap justify-center gap-2 cursor-pointer"><span><BsGithub size={20}/></span> <Link to="https://github.com/SusmitM/Fitbit" target="_blank">Github</Link></li>
     
    </ul>
  </div>
  )
}

export default Sidebar