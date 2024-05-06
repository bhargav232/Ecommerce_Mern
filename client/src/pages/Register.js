import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAdress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

    

        console.log( name, email, password, phone, address, answer);
        try {
                // if (password.length < 8) {
                //     toast.error("Password must be at least 8 characters long");
                //     return;
                // }
                // if (!/\W/.test(password)) {
                //     toast.error("Password must contain at least one special character");
                //     return;
                // }
                // if (!/^\d+$/.test(phone)) {
                //     toast.error("Phone number should contain only numeric characters");
                //     return;
                // }
            const res = await axios.post('http://localhost:5000/api/v1/auth/register', {
                name, email, password, phone, address, answer
            });
    
            if (res.data.success) {
                toast.success(res.data.Message);
                navigate("/Login")
                return;
            } else {
                toast.error(res.data.Message);
                console.log(res.data.Message);
                return;
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };
    

    return (
        <Layout title="Register Page - Ecommerce App">
            <div className='registration-form'>

              <h1 className="register-heading">Register</h1>
              <div className='inForm'>
              <form onSubmit={handleSubmit} className=" row g-3 form">
                        <div className="col-md-6">
                            <label className="n form-label" htmlFor="name">Name<spam className="req">(*)</spam>:</label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="n form-label" htmlFor="email">Email Address<spam className="req">(*)</spam>:</label>
                            <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                  <div className=" col-md-6">
                    <label className="n" htmlFor="password">Password<spam className="req">(*)</spam>:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className=" col-md-6">
                    <label className="n" htmlFor="phone">Phone<spam className="req">(*)</spam>:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="n" htmlFor="address">Address<spam className="req">(*)</spam>:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your Address"
                      onChange={(e) => setAdress(e.target.value)}
                      value={address}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="n" htmlFor="answer">Question<spam className="req">(*)</spam>:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="answer"
                      placeholder="Enter your Favorite dish?"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={answer}
                    />
                  </div>
                
                <div className='btn'>
                  <button
                    type="submit"
                    className="btn-primary btn-block"
                  >SignUp</button>
                </div>
              </form>
              </div>
              </div>
        </Layout>
      )
      
      
    }      

export default Register;

