import React from "react";
import features from './../../assets/features.png'

const Features = () => {
  return (
    <div id="features" className="xl:mx-auto xl:max-w-[1440px] lg:flex lg:items-center justify-between">
      <img src={features} alt="" className="lg:rounded-r-[100px] lg:w-[43%] mx-auto md:w-auto w-full pb-10 lg:pb-0" />
      <div className="px-[1.5rem] md:px-[3rem] lg:pr-[6rem] lg:pl-0 lg:w-[47%] leading-relaxed">
        <h3 className="text-2xl md:text-3xl lg:text-4xl pb-8 font-semibold">Set up task and schedule with a best features</h3>
        <p className="text-[18px] text-grey">The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !</p>
      </div>
    </div>
  );
};

export default Features;
