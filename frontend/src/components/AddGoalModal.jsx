import React, { useState } from "react";
import { AddGoalData } from "../services/AddGoalData";
import { useDataContext } from "../context/DataContext";

const AddGoalModal = ({ setShowGoalModal }) => {
  const { fetchGoalData } = useDataContext();
  const [formData, setFormData] = useState({
    GoalName: "",
    GoalDescription: "",
    TargetDate: "",
    TargetCaloriesValue: "",
    Status: "In Progress",
  });

  const handelSubmit = async (event) => {
    event.preventDefault();
    const apiResponse = await AddGoalData(formData);
    if (apiResponse) {
      alert("Goal Has Been Added");
      fetchGoalData();
    } else {
      alert("Error: Goal Could Not Be Added");
    }
    setShowGoalModal(false);
    setFormData({
      GoalName: "",
      GoalDescription: "",
      TargetDate: "",
      TargetCaloriesValue: "",
      Status: "",
    });
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10">
      <div className="border w-96 p-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handelSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Goal Name:
            </label>
            <input
              type="text"
              id="goalName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Add Goal Item"
              required
              value={formData.GoalName}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, GoalName: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Description:
            </label>
            <textarea
              id="Description"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add Description..."
              value={formData.GoalDescription}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, GoalDescription: e.target.value };
                })
              }
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Date:
            </label>
            <input
              type="date"
              id="Date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Add Date"
              required
              value={formData.TargetDate}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, TargetDate: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Calories Target (kcal):
            </label>
            <input
              type="number"
              id="Calories Target"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Add Calories Target"
              required
              value={formData.TargetCaloriesValue}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, TargetCaloriesValue: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Goal Status:
            </label>
            <select
              id="goalStatus"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              value={formData.Status}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, Status: e.target.value };
                })
              }
            >
              <option selected value="In Progress">
                In Progress
              </option>
              <option value="Achieved">Achieved</option>
              <option value="Abandoned">Abandoned</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              onClick={() => setShowGoalModal(false)}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGoalModal;
