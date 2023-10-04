
import { useSelector } from "react-redux";

const ExerciseTable = () => {
    const store = useSelector((state) => state);
    
 
  return (
    <table className="text-sm text-gray-500  w-11/12 text-center">
        <thead className="text-large text-gray-600 uppercase bg-gray-100 rounded">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3">Calories Burned</th>
          </tr>
        </thead>
        <tbody>
          {store.ExerciseData.map((data) => {
            return (
              <tr className="bg-white border-b" key={data._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-slate-300">
                  {data.ExerciseName}
                </td>
                <td className="px-6 py-4 border border-slate-300">{data.Duration} minutes</td>
                <td className="px-6 py-4 border border-slate-300">{data.CaloriesBurned} kcal</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default ExerciseTable