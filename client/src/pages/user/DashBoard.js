import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import UserMenu from '../../components/Layout/UserMenu.js'
import { useAuth } from '../../Context/Auth.js'

const DashBoard = () => {

  const [auth] = useAuth();
  return (
    <Layout title = "Dashboard-Ecommerece App">
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                  <div className="card w-70 p-3">
                    <h3>{auth?.user?.name}</h3>
                    <h3>{auth?.user?.email}</h3>
                    <h3>{auth?.user?.address}</h3>
                  </div>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default DashBoard
