import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { useAuth } from '../../Context/Auth';
import toast from 'react-hot-toast';

const Header = () => {

  const[auth, setAuth] = useAuth();

  const handleLogout =()=>{
    setAuth({
      ...auth,
      user:null,
      token: ""
    })
    localStorage.removeItem('auth')
    toast.success("Sucessfully logout!")

  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to ="/" className="navbar-brand">
     
        Ecommerece App</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to = "/" className="nav-link " aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = "/Category" className="nav-link " aria-current="page">Category</NavLink>
        </li>
        {!auth.user ?(
          <>
          <li className="nav-item">
          <NavLink to = "/Register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = "/Login" className="nav-link" href="#">Login</NavLink>
        </li>
        </>
        ) :(

          <div className="dropdown">
            <div className="btn dropdown-toggle " 
            id="dropdownMenuButton1" data-bs-toggle="dropdown" >
              <span className='authUserName'>
              {auth.user.name}
              </span>
              
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <NavLink to = {`/dashboard/${auth.user.role === false ? "user":"admin"}`} className="nav-link" href="#">Dashboard</NavLink>
              <NavLink onClick={handleLogout} to = "/Login" className="nav-link" href="#">Logout</NavLink>
            </ul>
          </div>


        //   <li className="nav-item">
        //   <NavLink onClick={handleLogout} to = "/Login" className="nav-link" href="#">Logout</NavLink>
        //  </li>
        )    
        }
        <li className="nav-item">
          <NavLink to = "/Cart" className="nav-link" href="#">Cart (0)</NavLink>
        </li >
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
