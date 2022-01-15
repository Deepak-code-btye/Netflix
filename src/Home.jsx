import React from "react";
import HomeTitle from "./HomeTitle";
import Nav from "./Nav";
import Card from "./component/Card";
import u1 from "./images/taddy.jpeg";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import Card4 from "./component/Card4";
const Home = () => {
  return (
    <>
      <div
        className=" bg-no-repeat min-w-full h-screen bg-center flex flex-col items-center justify-center bg-cover"
        style={{
          "background-image":
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/RRr.jpg)",
        }}
      >
        <header className="flex justify-between w-full h-screen py-8 ml-2">
          <div className="">
            <Nav />
          </div>
          <div className="flex flex-row mr-5 ">
            <div className="basis-1/4">
              <i className="fas fa-search text-white" />
            </div>
            &ensp;&ensp; &ensp;
            <div className="basis-1/4">
              <i className="fas fa-bell text-white" />
            </div>
            &ensp; &ensp; &ensp;
            <div className="basis-1/4">
              <img className="w-8 border-1 rounded-full" src={u1} alt="user" />
            </div>
          </div>
        </header>

        <HomeTitle />
      </div>
      <Card />
      <Card2 />
      <Card3 />
      <Card4/>
    </>
  );
};

export default Home;
