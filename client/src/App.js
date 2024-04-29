import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Category from "./pages/Category";

function App() {
  return(
    <>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/About' element = {<About/>}/>
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
