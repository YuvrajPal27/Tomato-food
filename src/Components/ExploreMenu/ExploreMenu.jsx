import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5 my-auto mt-5">
      <h1 className="text-slate-600 font-semibold text-3xl">
        Explore Our Menu
      </h1>
      <p id="explore-menu-text" className="max-w-[80%] text-shadow-slate-300">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary experties. Our mission
        is to satisfy your cravings and elevate your dining experience , one
        delicious meal at a time.
      </p>
      <div
        id="explore-menu-list"
        className="flex justify-between items-center gap-8 text-center mx-20 my-0 overflow-x-scroll scrollbar-hide"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              id="explore-menu-list-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
              className=""
            >
              <img
                src={item.menu_image}
                className={`w-[7.5vw] min-w-20 cursor-pointer rounded-4xl transition-all ${category === item.menu_name ? "border-4 rounded-3xl border-red-400" : "border-4 border-transparent"}`}
              ></img>
              <p className="mt-2 text-slate-500 text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-10 my-0 h-1 bg-slate-300 border-none" />
    </div>
  );
};

export default ExploreMenu;
