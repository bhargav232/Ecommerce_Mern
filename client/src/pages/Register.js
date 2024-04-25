import React from 'react'
import Layout from '../components/Layout/Layout'

const Register = () => {
    return (
        <Layout title="Register Page - Ecommerce App">
            <div className="register-container">
                <div className="register-form">
                    <h1 className="register-heading">Register</h1>
                    <form>
                        <div className="form-group">
                            <label className="n" htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="name" 
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="n" htmlFor="email">Email Address:</label>
                            <input 
                                type="email" 
                                className="form-control"
                                id="email" 
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="n" htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="n" htmlFor="phone">Phone:</label>
                            <input 
                                type="tel" 
                                className="form-control"
                                id="phone" 
                                placeholder="Enter your Phone"
                            />
                        </div>
                        <div className="form-group">
                            <label className="n"  htmlFor="address">Address:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="address" 
                                placeholder="Enter your Address"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit:</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register;

