import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React Toastify
const Layout = ({children, description,keywords,author,title }) => {
  return (
    <div>
  <Helmet>
  <meta charset="UTF-8"/>
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={author}/>
  <title>{title}</title>
  </Helmet>
    <Header/>
    <main style={{minHeight: '70vh'}}>
    <ToastContainer
          style={{ fontSize: '14px', maxWidth: '400px' }} 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false}
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
        />
       {children} </main>  
    <Footer/>
    </div>
  )
}

Layout.defaultProps ={
  description : "Mern stack Ecommerce App",
  keywords : "Mern, react, node, Ecommerece, shopping, MongoDb", 
  author : "Bhargav Manavadariya",
  title :"Ecommerce App - shop now"
};

export default Layout
