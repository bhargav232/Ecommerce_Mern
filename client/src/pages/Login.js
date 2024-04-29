import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye and eye slash icons from react-icons
import { useAuth } from '../Context/Auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email, password
   });

   if(res.data.success){
    toast.success("login successfully!");
     console.log(res.data.Message)
     setAuth({
      ...auth,
      user: res.data.user,
      token: res.data.token
   });
   localStorage.setItem('auth', JSON.stringify(res.data))
   
     navigate("/HomePage")
   }
   else{
    toast.error(res.data.Message);
   }
    }
    catch (error) {
      if (error.response.status === 401) {
          toast.error("Incorrect Credentials");
      } else {
          console.error("An error occurred:", error);
          toast.error("An error occurred. Please try again later.");
      }
  }
   
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Layout title="Login Page - Ecommerce App">
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input 
                type="email" 
                className="form-control"
                id="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group" id="pwd">
                <label htmlFor="password">Password:</label>
                <div className="password-input-container">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span 
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ?  <FaEye />:<FaEyeSlash /> }
                  </span>
                </div>
              </div>
            <button 
              type="submit" 
              className="btn btn-primary btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
