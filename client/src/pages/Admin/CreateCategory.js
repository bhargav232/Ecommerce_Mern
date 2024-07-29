import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateCategory = () => {
  return (
    <Layout title="Dashboard - Create Category">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap">
          <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-md shadow-md mb-6 md:mb-0">
            <AdminMenu />
          </aside>
          <main className="w-full md:w-3/4 p-4 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-semibold">Create Category</h3>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
