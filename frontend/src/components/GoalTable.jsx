import React from "react";
import { useSelector } from "react-redux";
import { BsCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { DeleteGoalData } from "../services/DeleteGoalData";
import {useDataContext} from "../context/DataContext"
const GoalTable = () => {
  const store = useSelector((state) => state);

  const {fetchGoalData} =useDataContext();
  const deleteItem=async (id)=>{
    const response=await DeleteGoalData(id)
    if(response){
      fetchGoalData()
      alert("Delete Item Succesfully!!!")

    }
  }
  return (
    <table className="text-sm text-gray-500  w-11/12 text-center">
      <thead className="text-large text-gray-600 uppercase bg-gray-100 rounded">
        <tr>
          <th className="px-6 py-3">Goal Name</th>
          <th className="px-6 py-3">Goal Description</th>
          <th className="px-6 py-3">Target Date</th>
          <th className="px-6 py-3">Target Calories Value</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-3 py-3">Delete</th>
        </tr>
      </thead>
      <tbody>
        {store?.GoalData?.map((data) => {
          const date = new Date(data.TargetDate);

          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = String(date.getFullYear());
          return (
            <tr className="bg-white border-b" key={data._id}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-slate-300">
                {data.GoalName}
              </td>
              <td className="px-6 py-4 border border-slate-300">
                {data.GoalDescription}
              </td>
              <td className="px-6 py-4 border border-slate-300">
                {day}-{month}-{year}
              </td>
              <td className="px-6 py-4 border border-slate-300">
                {data.TargetCaloriesValue} kcal
              </td>
              <td className="px-6 py-4 border border-slate-300 ">
                <span className="flex items-center gap-1">
                  <BsCircleFill
                    style={{
                      color:
                        data.Status === "In Progress"
                          ? "yellow"
                          : data.Status === "Achieved"
                          ? "green"
                          : "red",
                    }}
                  />{" "}
                  {data.Status}
                </span>
              </td>
              <td className="text-lg text-red-700 py-4 flex items-center justify-center cursor-pointer" onClick={()=>deleteItem(data._id)}>
                <AiFillDelete />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GoalTable;
