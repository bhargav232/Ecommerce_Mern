import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import AdminProfile from './AdminProfile'
import { useAuth } from '../../Context/Auth'

const AdminDashboard = () => {
    const[auth] =useAuth();
  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                <AdminMenu panelName = "Admin Panel"/>
                </div>
                <div className="col-md-3 card w-75 p-3">
                 <AdminProfile profile = {auth.user} />
                </div>
            </div>
  
       </div>
      </Layout>
    </div>
  )
}

export default AdminDashboard
