import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);

  // get all categories
  const getAllCategories = async () => {
    try {
      const response = await axios.get('/api/v1/category/get-allcategory');
      const { data } = response;
      if (data && data.success) {
        setCategories(data.category|| []); // Fallback to an empty array if categories is undefined
      } else {
        console.log("Error while fetching categories");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Layout title="Dashboard - Create Category">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap">
          <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-md shadow-md mb-6 md:mb-0">
            <AdminMenu />
          </aside>
          <main className="w-full md:w-3/4 p-4 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4 ">Create Category</h3>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold mr-4">Manage Category:</h3>
              <CategoryForm />
            </div>
            {categories.length > 0 ? (
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">SR.NO</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category,index) => (
                    <tr key={category._id}>
                      <td className="py-2 px-4 border-b">{index+1}</td>
                      <td className="py-2 px-4 border-b">{category.name}</td>
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                       focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2
                       dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No categories available</p>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
