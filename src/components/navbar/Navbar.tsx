import { NavLink } from "react-router-dom"


function Navbar() {
  return (
   <nav className="py-5 px-10 bg-violet-400 flex items-center gap-4 text-white">

    <NavLink to={"/"}>
        Home
    </NavLink>
    

    <NavLink to={"/about"}>
        About
    </NavLink>

    <NavLink to={"/basket"}>
       Basket
    </NavLink>

    <NavLink to={"/login"}>
        Login
    </NavLink>

   </nav>
  )
}

export default Navbar
