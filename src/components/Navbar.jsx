import React from "react";
import { useDispatch } from "react-redux";
import { searchFood } from "../Redux/SearchSlice";
const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3">
      <div>
        <h3 className="text-xl font-bold text-gray-600 mb-2">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold text-black-300">Foodies</h1>
      </div>
      <div>
        <input className="border-2 border-gray-400 text-sm rounded-lg p-3 outline-none w-full lg:w-[25vw]"
          type="search"
          name="Search"
          id="Search"
          placeholder="Search here" onChange={(e)=>dispatch(searchFood(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
