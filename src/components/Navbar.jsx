import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
export default function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="absolute w-full  flex justify-between p-4 items-center">
      <h1 className="text-white  font-bold text-2xl z-20">Experiences</h1>
      <HiMenuAlt3
        onClick={handleNav}
        size={25}
        className="z-20 text-white cursor-pointer"
      />
      <div
        className={
          nav
            ? "fixed ease-in duration-500 text-gray-200 left-0 top-0 w-full h-screen bg-black/75  px-4 py-7 flex flex-col z-10"
            : "absolute ease-in duration-300  left-[-100%] top-0 "
        }
      >
        <ul className="flex flex-col fixed  w-full h-full items-center justify-center">
          <li className="text-3xl cursor-pointer font-bold p-4 sm:p-8">Home</li>
          <li className="text-3xl cursor-pointer font-bold p-4 sm:p-8">
            Destinations
          </li>
          <li className="text-3xl cursor-pointer font-bold p-4 sm:p-8">
            Reservations
          </li>
          <li className="text-3xl cursor-pointer font-bold p-4 sm:p-8">
            Amenties
          </li>
          <li className="text-3xl cursor-pointer font-bold p-4 sm:p-8">
            Rooms
          </li>
        </ul>
      </div>
    </div>
  );
}
