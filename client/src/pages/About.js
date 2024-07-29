import React from 'react';
import Layout from '../components/Layout/Layout';


const About = () => {
  return (
    <Layout title="About page">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center my-8">About</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to the About page. Here you can learn more about our Ecommerce App.
        </p>
      </div>
    </Layout>
  );
}

export default About;
