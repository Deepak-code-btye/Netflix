import React from "react";
import f1 from "../images/friend.jpg";
import instagram from "../images/inst2.png";
const Card = () => {
  return (
    <div className="bg-teal-400 py-2 px-2">
      <div className="grid sm:grid-cols-2 justify-items-center md:grid-cols-3 gap-10">
        <div className="bg-black border-6 border-white p-3 flex justify-center relative sm:w-full ">
          <div className="bg-grayBorder rounded-3xl">
            <img src={f1} alt="" className="rounded-t-3xl pb-5 " />
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-400 text-center rounded-tr-3xl rounded-bl-3xl absolute top-3 right-3 ">
              <span className="text-white text-2xl font-bold ">99</span>
            </div>
            <div className="flex justify-between px-3">
              <p className="text-white">@janalibra</p>
              <img src={instagram} alt="" className="w-10" />
            </div>
            <p className="text-zinc-400 pb-3 pl-3">Delhi</p>
          </div>
        </div>
        <div className="bg-black border-6 border-white p-3 flex justify-center relative sm:w-full ">
          <div className="bg-grayBorder rounded-3xl">
            <img src={f1} alt="" className="rounded-t-3xl pb-5 " />
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-400 text-center rounded-tr-3xl rounded-bl-3xl absolute top-3 right-3 ">
              <span className="text-white text-2xl font-bold ">99</span>
            </div>
            <div className="flex justify-between px-3">
              <p className="text-white">@janalibra</p>
              <img src={instagram} alt="" className="w-10" />
            </div>
            <p className="text-zinc-400 pb-3 pl-3">Delhi</p>
          </div>
        </div>
        <div className="bg-black border-6 border-white p-3 flex justify-center relative sm:w-full ">
          <div className="bg-grayBorder rounded-3xl">
            <img src={f1} alt="" className="rounded-t-3xl pb-5 " />
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-400 text-center rounded-tr-3xl rounded-bl-3xl absolute top-3 right-3 ">
              <span className="text-white text-2xl font-bold ">99</span>
            </div>
            <div className="flex justify-between px-3">
              <p className="text-white">@janalibra</p>
              <img src={instagram} alt="" className="w-10" />
            </div>
            <p className="text-zinc-400 pb-3 pl-3">Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
