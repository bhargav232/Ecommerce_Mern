import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log( email, answer, newPassword)
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        console.log(1)

        navigate("/Login");
      } else {
        toast.error(res.data.message);
        console.log(2)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout title="Forget Password">
      <div className="forgetPassword-container">
        <div className="forgetPassword-form">
          <h1 className="forgetPassword-heading">Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input 
                type="email" 
                className="form-control"
                id="emailforgetpassword" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="answer">Answer:</label>
              <input 
                type="text" 
                className="form-control"
                id="answer" 
                placeholder="Enter Answer"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input 
                type="password" 
                className="form-control"
                id="newPassword" 
                placeholder="Enter New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
            
            <div className='login-buttons'>
              <button 
                type="submit" 
                className="btn btn-primary btn-block"
               
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgetPassword;
