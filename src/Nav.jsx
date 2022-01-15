import React from "react";
import n1 from "./images/neflix.png";

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/" },
    { name: "New & Popular", link: "/" },
    { name: "Moives", link: "/" },
    { name: "MyList", link: "/" },
  ];
  return (
    <>
      <ul className=" container clearfix   flex justify-between md:justify-between md:text-sm ml-5 sm:text-sm  md:items-center md:pb-0 md:static ">
        <span>
          <img className="w-10" src={n1} alt="" />
        </span>
        {Links.map((link) => (
          <li
            className=" px-2 md:px-0 md:text-base text-xs sm:text-sm flex md:ml-8 space-x-1 justify-between ml-2 md:my-0 "
            key={link.id}
          >
            <a
              className=" text-gray-100 hover:text-gray-400 duration-500"
              href="#"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
