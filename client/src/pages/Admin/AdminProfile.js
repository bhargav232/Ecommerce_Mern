import React from 'react';

const AdminProfile = ({profile}) => {

 

  return (
    <div>
      <h3>Name: {profile.name}</h3>
      <h3>Email: {profile.email}</h3>
      <h3>Phone: {profile.phone}</h3>
    </div>
  );
};

export default AdminProfile;
