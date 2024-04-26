import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <Layout title="Login Page - Ecommerce App">
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="n" htmlFor="email">Email Address:</label>
              <input 
                type="email" 
                className="form-control"
                id="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="n" htmlFor="password">Password:</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
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
