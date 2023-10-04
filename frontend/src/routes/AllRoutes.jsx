import React from 'react'
import {Routes,Route} from "react-router-dom"

import Layout from "../layout/Layout"
import Dashboard from '../pages/Dashboard'
import ExercisePage from '../pages/ExercisePage'
import FoodPage from '../pages/FoodPage'
import GoalPage from '../pages/GoalPage'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>} />
        <Route path="/exercise" element={<Layout><ExercisePage/></Layout>} />
        <Route path="/food" element={<Layout><FoodPage/></Layout>} />
        <Route path="/goal" element={<Layout><GoalPage/></Layout>} />
    </Routes>
    
    </>
  )
}

export default AllRoutes