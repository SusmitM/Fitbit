import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import {useDataContext} from "../context/DataContext"
import { DeleteFoodData } from "../services/DeleteFoodData";

const FoodTable = () => {
  const {fetchFoodData} =useDataContext();
    const store = useSelector((state) => state);
    const deleteItem=async (id)=>{
      const response=await DeleteFoodData(id)
      if(response){
        fetchFoodData();
        alert("Delete Item Succesfully!!!")
  
      }
    }
 
  return (
    <table className="text-sm text-gray-500  w-11/12 text-center">
    <thead className="text-large text-gray-600 uppercase bg-gray-100 rounded">
      <tr>
        <th className="px-6 py-3">Name</th>
        <th className="px-6 py-3">Calories Burned</th>
        <th className="px-6 py-3">Protein</th>
        <th className="px-6 py-3">Carbohydrates</th>
        <th className="px-6 py-3">Fat</th>
        <th className="px-3 py-3">Delete</th>
      </tr>
    </thead>
    <tbody>
      {store?.FoodData?.map((data) => {
        return (
          <tr className="bg-white border-b" key={data._id}>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-slate-300">
              {data.FoodName}
            </td>
            <td className="px-6 py-4 border border-slate-300">{data.Calories} kcal</td>
            <td className="px-6 py-4 border border-slate-300">{data.Protein} grams </td>
            <td className="px-6 py-4 border border-slate-300">{data.Carbohydrates} grams </td>
            <td className="px-6 py-4 border border-slate-300">{data.Fat} grams </td>
            <td className="text-lg text-red-700 py-4 flex items-center justify-center cursor-pointer" onClick={()=>deleteItem(data._id)}>
                <AiFillDelete />
              </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default FoodTable

