import React from "react";
import c1 from "../images/banner.png";
const Card2 = () => {
  return (
    <>
      <div
        className=" w-full h-full md:bg-cover "
        style={{ backgroundColor: "#141316" }}
      >
        <h1 className="text-xl font-serif text-white">
          Continue Watching for Mudit
        </h1>
        <div className="grid grid-cols-6  md:gap-2 lg:grid-col-8 lg:gap-2 justify-items-center">
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
          <div className="py-2">
            <div className=" rounded overflow-hidden shadow-lg max-w-sm">
              <img src={c1} alt="netf" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
