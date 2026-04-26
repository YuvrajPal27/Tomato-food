import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div id="navbar" className="px-0 py-5 flex justify-between items-center">
      <img src={assets.logo} id="logo" alt="logo" className="w-30 xl:w-35"></img>
      <ul id="navbar-menu" className="list-none gap-5 text-slate-600 hidden md:flex md:gap-4 md:text-base xl:gap-5 xl:text-lg">
        <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu==="home"?"underline":""}`}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={`cursor-pointer ${menu==="menu"?"underline":""}`}>menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu==="mobile-app"?"underline":""}`}>mobile-app</a>
        <a href="#footer" onClick={() => setMenu("contact us")} className={`cursor-pointer ${menu==="contact us"?"underline":""}`}>contact us</a>
      </ul>
      <div id="navbar-right" className="flex items-center gap-5 xl:gap-8 ">
        <img src={assets.search_icon} className="w-5 xl:w-6"></img>
        <div id="navbar-search-icon" className="relative">
          <img src={assets.basket_icon} className="w-5 xl:w-6"></img>
          <div id="dot" className="absolute min-w-1.5 min-h-1.5 bg-red-400 rounded-lg top-0 right-0"></div>
        </div>
        <button className="transparent text-base text-slate-600 border border-solid border-slate-400 px-5 py-2 rounded-3xl cursor-pointer hover:bg-white/10 transition duration-300 xl:py-2 xl:px-6">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
