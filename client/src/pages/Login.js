import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useAuth } from '../Context/Auth';
import backgroundImage from '../Assets/login.jpg'; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email, password
      });

      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate("/HomePage");
      } else {
        toast.error(res.data.Message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect Credentials");
      } else {
        console.error("An error occurred:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const redirectForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <Layout title="Login Page - Ecommerce App">
      
      <div 
        className="flex items-center justify-center h-screen bg-cover bg-center bg-repeat"
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm bg-opacity-80">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700 mb-1">Email Address:</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm" 
                id="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-1">Password:</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm" 
                  id="password" 
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span 
                  className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <button 
                type="submit" 
                className="w-full py-2 px-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 text-sm"
              >
                Sign In
              </button>
              <button 
                type="button" 
                onClick={redirectForgetPassword}
                className="w-full py-2 px-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 text-sm"
              >
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
