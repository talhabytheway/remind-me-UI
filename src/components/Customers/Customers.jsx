import React, {  useRef } from "react";
import reviews from "../../assets/reviews.png";
import profile from "../../assets/profile.png";
import profile1 from "../../assets/profile1.jpg";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const Customers = () => {
  const carouselRef = useRef(null);
  return (
    <div className="xl:mx-auto xl:max-w-[1440px] lg:flex lg:items-center justify-between">
      <img
        src={reviews}
        alt=""
        className="lg:rounded-r-[100px] lg:w-[43%] mx-auto md:w-auto xl:ml-0 w-full pb-10 lg:pb-0 hidden lg:inline"
      />
      <div className="px-[1.5rem] md:px-[3rem] lg:p-0 md:w-[700px] lg:w-[500px] mx-auto lg:ml-auto leading-relaxed">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl pb-8 font-semibold">
            What do they think
          </h3>
          <Carousel ref={carouselRef}>
            <Item>
              <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-8">
                  <img
                    src={profile}
                    alt="Samantha Sench"
                    className="w-fit h-16 rounded-full"
                  />
                  <div className="w-[80%] [&>span]:block">
                    <span className="font-semibold text-[18px]">
                      Samantha Sench
                    </span>
                    <span className="text-grey text-[14px]">
                      Student at University
                    </span>
                  </div>
                </div>
                <p className="text-[18px]">
                  “ Hi, it’s Samantha. After using it made me a lot of benefits,
                  starting with convenience of setting a deadline of tasks and
                  schedule after that the app is very simple using. “
                </p>
              </div>
            </Item>
            <Item>
              <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-8">
                  <img
                    src={profile1}
                    alt="Muhammad Talha"
                    className="w-fit h-16 rounded-full"
                  />
                  <div className="w-[80%] [&>span]:block">
                    <span className="font-semibold text-[18px]">
                      Muhammad Talha
                    </span>
                    <span className="text-grey text-[14px]">
                      Student at University
                    </span>
                  </div>
                </div>
                <p className="text-[18px]">
                  “ Hi, it’s Talha. After using it made me a lot of benefits,
                  starting with convenience of setting a deadline of tasks and
                  schedule after that the app is very simple using. “
                </p>
              </div>
            </Item>
          </Carousel>
          <div className="w-full flex flex-row justify-center lg:justify-start gap-6 flex-wrap pt-4 [&>img]:cursor-pointer">
          <img src={left} onClick={() => carouselRef.current.slidePrev()} alt='' className="inline-block"/>
          <img src={right} onClick={() => carouselRef.current.slideNext()} alt=''className="inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
