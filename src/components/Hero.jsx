import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen  ">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className=" text-white absolute top-0 w-full h-full flex flex-col justify-center items-center">
        <div className="md:left-[10%] m-auto absolute p-4">
          <p className="text-xl  font-bold">All Inclusive</p>
          <h1 className="text-4xl sm:text-6xl  md:text-7xl font-extrabold">
            Private Beaches & Getaways
          </h1>
          <p className=" max-w-[550px] sm:text-base mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            cupiditate optio ipsum dolorem laboriosam laborum necessitatibus
            fugit sint similique minus?
          </p>
          <button className="mt-2 bg-white text-black hover:bg-transparent hover:text-white transition-all">
            Reserve Now
          </button> 
          
        </div>
      </div>
     
    </div>
  );
}
