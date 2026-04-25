import { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div id="navbar" className="px-0 py-5 flex justify-between items-center">
      <img src={assets.logo} id="logo" alt="logo" className="w-35 sm:w-40"></img>
      <ul id="navbar-menu" className="flex list-none gap-5 text-slate-600 text-sm sm:gap-5 sm:text-xl md:gap-4 md:text-md">
        <li onClick={() => setMenu("home")} className={`cursor-pointer ${menu==="home"?"underline":""}`}>home</li>
        <li onClick={() => setMenu("menu")} className={`cursor-pointer ${menu==="menu"?"underline":""}`}>menu</li>
        <li onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu==="mobile-app"?"underline":""}`}>mobile-app</li>
        <li onClick={() => setMenu("contact us")} className={`cursor-pointer ${menu==="contact us"?"underline":""}`}>contact us</li>
      </ul>
      <div id="navbar-right" className="flex items-center gap-10 sm:gap-7">
        <img src={assets.search_icon} className="w-6"></img>
        <div id="navbar-search-icon" className="relative">
          <img src={assets.basket_icon}></img>
          <div id="dot" className="absolute min-w-1.5 min-h-1.5 bg-red-400 rounded-lg top-0 right-0"></div>
        </div>
        <button className="transparent text-md text-slate-600 border border-solid border-slate-400 px-3 py-2 rounded-3xl cursor-pointer hover:bg-white/10 transition duration-300 sm:py-2 sm:px-6">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
