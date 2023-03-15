import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { Link } from "react-scroll";

function Nav() {
  const [open, setopen] = useState(false);
  return (
    <div className="sticky top-0">
      <header
        className={`bg-dark backdrop-blur-[13px]  md:backdrop-blur-sm z-10 ${
          open ? "bg-opacity-100 lg:bg-opacity-40 bg-white" : "bg-opacity-40"
        }`}
      >
        <div
          className={`xl:mx-auto xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] flex py-5 justify-between text-[18px] font-semibold select-none transition-all ease-linear duration-650`}
        >
          <img
            src={logo}
            alt="Remind Me"
            className="h-8 md:h-9 lg:h-10 my-auto hover:cursor-pointer lg:hidden"
          />
          <span
            className={`cursor-pointer lg:hidden block transition-all ease-in duration-500 `}
            onClick={() => setopen(!open)}
          >
            <img src={open ? close : menu} alt="" className="w-10" />
          </span>
          <ul
            className={`block absolute px-[1.5rem] md:px-[3rem] lg:flex align-right lg:items-center !z-[100] transition-all ease-in duration-500 w-[100%] left-0 top-0 lg:w-auto lg:z-auto lg:static  lg:bg-none  lg:space-x-10 space-y-2.5 lg:space-y-0 my-auto opacity-100 p-3 lg:p-0 lg:mb-auto hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:opacity-100 hover:[&>*]:cursor-pointer ${
              open
                ? " top-[60px] opacity-100 bg-dark lg:bg-transparent bg-white"
                : " top-[-300px] opacity-0"
            } `}
          >
            <li>
              <img
                src={logo}
                alt="Remind Me"
                className="h-8 md:h-9 lg:h-10 my-auto hover:cursor-pointer hidden lg:inline-block"
              />
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                to="home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                to="services"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                to="projects"
              >
                About Us
              </Link>
            </li>
            <li className="lg:hidden transition-all ease-in duration-500 px-10 py-3 border-2 border-blue text-[16px] rounded-full hover:cursor-pointer hover:duration-500 text-blue hover:!text-white hover:bg-blue inline-block">
              About App
            </li>
          </ul>
          <div
            className={`transition-all ease-in duration-500 px-10 py-3 border-2 border-blue text-[16px] rounded-full hover:cursor-pointer hover:duration-500 text-blue hover:text-white hover:bg-blue hidden lg:inline`}
          >
            About App
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
