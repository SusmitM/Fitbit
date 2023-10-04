
import { useSelector } from "react-redux";
const FoodTable = () => {
    const store = useSelector((state) => state);
 
  return (
    <table className="text-sm text-gray-500  w-11/12 text-center">
    <thead className="text-large text-gray-600 uppercase bg-gray-100 rounded">
      <tr>
        <th className="px-6 py-3">Name</th>
        <th className="px-6 py-3">Calories Burned</th>
        <th className="px-6 py-3">Protein</th>
        <th className="px-6 py-3">Carbohydrates</th>
        <th className="px-6 py-3">Fat</th>
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
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default FoodTable

