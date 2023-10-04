import React from 'react'

const AddGoalModal = ({setShowGoalModal}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10">
    <div className="border w-96 p-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form>
        <div className="mb-6">
          <label
            for="goalName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Goal Name:
          </label>
          <input
            type="text"
            id="goalName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add Goal Item"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description:
          </label>
          <input
            type="number"
            id="Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add Description"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date:
          </label>
          <input
            type="date"
            id="Date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add Date"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Calories Target"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Calories Target (kcal):
          </label>
          <input
            type="number"
            id="Calories Target"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add Calories Target"
            required
          />
        </div>
        <div className="mb-6">
            <label
              for="goalStatus"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Goal Status:
            </label>
            <select
              id="goalStatus"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected value="Progress">In Progress</option>
              <option value="Achieved">Achieved</option>
              <option value="Abandoned">Abandoned</option>
            </select>
          </div>
        
        <div className="flex flex-col gap-4">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
          onClick={()=>setShowGoalModal(false)}
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancel
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddGoalModal