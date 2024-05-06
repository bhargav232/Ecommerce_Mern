import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Category from "./pages/Category";
import DashBoard from "./pages/user/DashBoard";
import ForgetPassword from "./pages/ForgetPassword";
import {PrivateRoute} from "./components/Routes/PrivateRoute";
import { AdminRoute } from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";

function App() {
  return(
    <>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
  
      <Route path = '/dashboard' element = {<PrivateRoute/>}>
      <Route path = 'user' element = {<DashBoard/>}/>
      </Route>
      <Route path = '/dashboard' element = {<AdminRoute/>}>
      <Route path = 'admin' element = {<AdminDashboard/>}/>
      <Route path = 'admin/create-category' element = {<CreateCategory/>}/>
      <Route path = 'admin/create-product' element = {<CreateProduct/>}/>
      <Route path = 'admin/users' element = {<Users/>}/>
      </Route>
      <Route path = '/About' element = {<About/>}/>
      
      <Route path = '/forget-password' element = {<ForgetPassword/>}/>
      <Route path = '/Policy' element = {<Policy/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path = '/Register' element = {<Register/>}/>
      <Route path = '/Login' element = {<Login/>}/>
      <Route path = '/Category' element = {<Category/>}/>
      <Route path = '/HomePage' element = {<HomePage/>}/>
      <Route path = '*' element = {<PageNotFound/>}/>
    </Routes>
    </>

  )
}

export default App;
