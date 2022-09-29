import React from "react";

const HomeTitle = () => {
  return (
    <>
      <div className=" pb-20 container clearfix flex justify-between md:justify-between md:text-sm  sm:text-sm  md:items-center md:pb-0 md:static">
        <div className="flex justify-start text-center font-serif text-white  lg:ml-10 font-bold">
          <span className="py-2 sm:text-sm">TV shows</span> &ensp;
          <ul className="relative">
            <select
              className="h-10 sm:h-10 p block appearance-none   text-white bg-gray-400 border border-gray-200 py-3 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-00"
              id="grid-state"
            >
              <option className="text-xs">Geners</option>
              <option className="text-xs">Missouri</option>
              <option className="text-xs">Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </ul>
        </div>
        {/* </div> */}
        <div className="flex">
          <div className="lg:ml-96 mr-5">
            <div className="ml-20 flex justify-end">
              <ul className="relative md:ml-20 ">
                <select
                  className=" h-10 p block appearance-none w-full  text-white bg-gray-400 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-00"
                  id="grid-state"
                ></select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-bars mr-2 text-white text-center"></i>
                </div>
              </ul>
              <ul className="relative ">
                <select
                  className=" h-10 p block appearance-none w-full  text-white bg-gray-400 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-00"
                  id="grid-state"
                ></select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-th-large mr-2 text-white text-center"></i>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="h-50 pl-9 pb-60 lg:my-10 ">
        <h1 className="text-4xl font-medium text-white text-left ">
          THE STRANGER
        </h1>
        <p className="py-2 md:w-1/2 text-white mt-4 text-left flex justify-around flex-cols ">
          When a strenger makes a shocking claim about his wife, family man Adam
          price becomes entangked in a mystery as he despertely searches for
          answser
        </p>
        <div className="mr-5 mt-4 flex justify-start ">
          <button className=" bg-[#f7eeee] text-black text-xl px-8">
            <i className="fas fa-play" />
            &ensp;Play
          </button>
          &ensp;
          <button className=" bg-[#353131] text-white text-xl px-8">
            <i className="fas fa-info-circle" /> &ensp;More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeTitle;
