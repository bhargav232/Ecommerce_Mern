import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-center">
      <h4 className="text-xl font-semibold mb-4">User Panel</h4>
      <NavLink 
        to="/dashboard/user/profile" 
        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md mb-2"
      >
        Profile
      </NavLink>
      <NavLink 
        to="/dashboard/user/orders" 
        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md"
      >
        Orders
      </NavLink>
    </div>
  );
};

export default UserMenu;
