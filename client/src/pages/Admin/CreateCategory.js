import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';
import toast from 'react-hot-toast';
import { Modal, Input} from 'antd'; 
import { useAuth } from '../../Context/Auth';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [auth, setAuth] = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/category/create-category", { name }, {headers:{
        "Authorization": auth.token
    }});
      const data = response.data; // Extract response data
      if (data.success) {
        toast.success(`${data.category.name} is created!`);
        getAllCategories(); // Fetch updated categories
      } else {
        toast.error(data.Message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
   
    try {
      const response = await axios.delete(
        `/api/v1/category/delete-category/${id}`,
      )
      const data = response.data;
      if (data.success) {
        toast.success(`${data.category.name} is deleted!`);
        getAllCategories(); 
      } else {
        toast.error(data.Message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    }
  };

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `/api/v1/category/update-category/${currentCategory._id}`,
        { name: currentCategory.name }, 
        {
          headers: {
           "Authorization": auth.token,
          }
        }
      );
  
      const data = response.data;
      if (data.success) {
        toast.success(`${data.category.name} is updated!`);
        getAllCategories(); // Fetch updated categories
      } else {
        toast.error(data.Message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    }
  };
  

  // get all categories
  const getAllCategories = async () => {
    try {
      const response = await axios.get('/api/v1/category/get-allcategory');
      const data = response.data;
      if (data && data.success) {
        setCategories(data.category || []); // Fallback to an empty array if categories is undefined
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
            <h3 className="text-2xl font-semibold mb-4">Create Category</h3>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold mr-4">Manage Category:</h3>
              <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
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
                  {categories.map((category, index) => (
                    <tr key={category._id}>
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{category.name}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          type="button"
                          onClick={() => handleEdit(category)}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(category._id)}
                          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No categories available</p>
            )}
          </main>
        </div>
        <Modal
          title="Edit Category"
          visible={visible}
          onOk={handleUpdate}
          onCancel={() => setVisible(false)}
        >
          <Input
            value={currentCategory?.name || ""}
            onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })}
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default CreateCategory;
