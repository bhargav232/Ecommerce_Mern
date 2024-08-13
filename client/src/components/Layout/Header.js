import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem('auth');
    toast.success("Successfully logged out!");
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Ecommerce App
        </Link>
        <button 
          className="lg:hidden text-white focus:outline-none" 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`hidden lg:flex lg:items-center lg:space-x-4`}>
          <NavLink
            to="/"
            className={({ isActive }) => `hover:bg-gray-700 px-3 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/Category"
            className={({ isActive }) => `hover:bg-gray-700 px-3 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : ''}`}
          >
            Category
          </NavLink>
          {!auth.user ? (
            <>
              <NavLink
                to="/Register"
                className={({ isActive }) => `hover:bg-gray-700 px-3 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : ''}`}
              >
                Register
              </NavLink>
              <NavLink
                to="/Login"
                className={({ isActive }) => `hover:bg-gray-700 px-3 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : ''}`}
              >
                Login
              </NavLink>
            </>
          ) : (
            <div className="relative">
              <button 
                className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700"
                aria-label="User menu"
                aria-expanded={isUserMenuOpen}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <span>{auth.user.name}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-300 ${isUserMenuOpen ? 'block' : 'hidden'}`}
              >
                <NavLink 
                  to={`/dashboard/${auth.user.role === false ? "user" : "admin"}`} 
                  className={({ isActive }) => `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700 text-white' : ''}`}
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
                <button 
                  onClick={handleLogout} 
                  className="w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
          <NavLink
            to="/Cart"
            className={({ isActive }) => `hover:bg-gray-700 px-3 py-2 rounded ${isActive ? 'bg-gray-700 text-white' : ''}`}
          >
            Cart (0)
          </NavLink>
        </div>
      </div>
      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-72 w-64 bg-gray-800 text-white z-50 lg:hidden shadow-lg">
          <div className="flex flex-col h-full">
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-16 flex flex-col items-start px-4">
              <NavLink
                to="/"
                className={({ isActive }) => `block py-2 px-4 text-white hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/Category"
                className={({ isActive }) => `block py-2 px-4 text-white hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Category
              </NavLink>
              {!auth.user ? (
                <>
                  <NavLink
                    to="/Register"
                    className={({ isActive }) => `block py-2 px-4 text-white hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/Login"
                    className={({ isActive }) => `block py-2 px-4 text-white hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <div className="relative">
                  <button 
                    className="flex items-center space-x-2 py-2 px-4 text-white hover:bg-gray-700"
                    aria-label="User menu"
                    aria-expanded={isUserMenuOpen}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <span>{auth.user.name}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="flex flex-col items-start mt-2 bg-gray-800 text-white rounded-md shadow-lg">
                      <NavLink 
                        to={`/dashboard/${auth.user.role === false ? "user" : "admin"}`} 
                        className={({ isActive }) => `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </NavLink>
                      <button 
                        onClick={handleLogout} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
              <NavLink
                to="/Cart"
                className={({ isActive }) => `block py-2 px-4 text-white hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
