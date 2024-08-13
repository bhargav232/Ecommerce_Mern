import React from 'react';

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <form className="flex items-center max-w-sm space-x-4" onSubmit={handleSubmit}>
      <div className="flex-grow">
        <input
          type="text"
          id="category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter New Category"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
