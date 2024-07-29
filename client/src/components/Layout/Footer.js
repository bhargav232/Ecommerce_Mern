import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold mb-2">
          All Rights Reserved &copy; Ecommerce
        </h4>
        <nav className="mb-2">
          <Link to="/about" className="text-blue-400 hover:text-blue-300 mx-2 text-base">About</Link>
          <Link to="/contact" className="text-blue-400 hover:text-blue-300 mx-2 text-base">Contact</Link>
          <Link to="/policy" className="text-blue-400 hover:text-blue-300 mx-2 text-base">Policy</Link>
        </nav>
        <p className="text-xs">
          <span>&#169; {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
