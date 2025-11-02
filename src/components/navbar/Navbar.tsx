import { NavLink } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <nav className="py-5 px-10 bg-violet-400 flex items-center justify-between cursor-pointer  text-white dark:bg-slate-800">
<div className="flex items-center gap-5">

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
</div>

            <div className="flex items-center gap-4">
                <button className="text-xl" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LuSun /> : <FaMoon />}
        </button>
                <button className="text-xl">
                    <FaUserCircle />
                  
                </button>
                <button className="text-xl">
                    <SlBasket />
                  
                </button>
                <button className="bg-violet-500 rounded py-1 px-2">
                    change
                </button>
            </div>

        </nav>
    )
}

export default Navbar
