import React from 'react';

const AdminProfile = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Admin Profile</h3>
      <div className="space-y-4">
        <div>
          <span className="font-medium text-gray-700">Name:</span>
          <p className="text-lg">{profile.name}</p>
        </div>
        <div>
          <span className="font-medium text-gray-700">Email:</span>
          <p className="text-lg">{profile.email}</p>
        </div>
        <div>
          <span className="font-medium text-gray-700">Phone:</span>
          <p className="text-lg">{profile.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
