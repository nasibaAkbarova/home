import { lazy } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
const Home=lazy(()=>import("./pages/home/Home"))
const About=lazy(()=>import("./pages/about/About"))
const Basket=lazy(()=>import("./pages/basket/Basket"))
const Login=lazy(()=>import("./pages/login/Login"))
function App() {
 

  return (
    <>
  

      <Navbar/>
     
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/login' element={<Login />} />
       </Routes>
   
        
      
    </>
  )
}

export default App
