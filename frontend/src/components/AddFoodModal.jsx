import React from 'react'

const AddFoodModal = ({setShowFoodModal}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10">
    <div className="border w-96 p-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form>
        <div className="mb-6">
          <label
            for="foodName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Food Name:
          </label>
          <input
            type="text"
            id="foodName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Food Item"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="calories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Calories (grams):
          </label>
          <input
            type="number"
            id="calories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Calories"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Protein"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Protein (grams):
          </label>
          <input
            type="number"
            id="Protein"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Protein"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Carbohydrates"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Carbohydrates (grams):
          </label>
          <input
            type="number"
            id="Carbohydrates"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Carbohydrates"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Fat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fat (grams):
          </label>
          <input
            type="number"
            id="Fat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Fat"
            required
          />
        </div>
        
        <div className="flex flex-col gap-4">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
          onClick={()=>setShowFoodModal(false)}
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

export default AddFoodModal