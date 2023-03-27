import React from "react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import link from "../../assets/link.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="xl:mx-auto xl:min-w-[1280px] px-[2rem] md:px-[3rem] lg:px-[6rem] gap-6 lg:gap-0 flex flex-col lg:flex-row lg:justify-between pt-[3rem] pb-[56px] lg:pb-12">
      <div className="lg:w-[35%] md:flex mx-auto lg:mx-0 md:gap-10 lg:gap-5 items-center flex-wrap">
        <img src={logo} alt="" className="h-[65px] md:h-16 lg:h-[80px] w-auto mx-auto mb-[22px] lg:m-0"/>
        <p className="max-w-[400px] md:max-w-[300px] lg:max-w-[400px] text-center text-[18px] md:text-left text-grey">
          Task deadlines and scheduling applications with various benefits and
          advantages
        </p>
      </div>
      <div className="flex mx-auto lg:mx-0 gap-16 lg:gap-20 2xl:gap-32 flex-wrap">
      <div className="">
        <h4 className="text-[24px] font-semibold pb-3 lg:pb-10 lg:pt-6">Sitemaps</h4>
        <ul className="text-blue text-[18px] list-disc list-inside [&>li]:pb-2">
          <li><Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=""
              to="home"
            ><span className="text-grey cursor-pointer">Home</span></Link></li>
          <li><Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=""
              to="features"
            ><span className="text-grey cursor-pointer">Features</span></Link></li>
          <li><Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=""
              to="about-us"
            ><span className="text-grey cursor-pointer">AboutUs</span></Link></li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-[24px] font-semibold pb-3 lg:pb-10 lg:pt-6">Advantages</h4>
        <ul className="text-blue text-[18px] [&>li>span]:text-grey list-disc list-inside [&>li]:pb-2">
          <li><span>Set Task Better</span></li>
          <li><span>Easy Manage</span></li>
          <li><span>Get Notification</span></li>
        </ul>
      </div>
      </div>
      <div className="mx-auto lg:mx-0">
        <h4 className="text-[24px] font-semibold pb-3 lg:pb-10 lg:pt-6 text-center lg:text-left">Follow Us</h4>
        <div className="flex flex-row gap-4 [&>img]:cursor-pointer">
          <a href="http://www.facebook.com/talhabytheway" target={"_blank"} rel={"noreferrer"}><img src={fb} alt="" /></a>
          <a href="http://www.twitter.com/talhaism_" target={"_blank"} rel={"noreferrer"}><img src={twitter} alt="" /></a>
          <a href="http://www.linkedin.com/in/talhabytheway" target={"_blank"} rel={"noreferrer"}><img src={link} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
