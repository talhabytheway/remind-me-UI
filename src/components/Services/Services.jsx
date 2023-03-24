import React from 'react'
import schedule from "../../assets/schedule.svg";
import layers from "../../assets/layers.svg";
import notification from "../../assets/notification.svg";

const Services = () => {
  return (
    <div className='xl:mx-auto xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:mt-4'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 [&>div]:w-[80%] [&>div]:lg:w-full [&>div]:lg:px-2 [&>div]:mx-auto [&>div>img]:mx-auto [&>div>img]:lg:mx-0 [&>div>img]:p-4 [&>div>img]:rounded-full [&>div>img]:bg-lblue [&>div>h3]:font-bold [&>div>p]:text-grey [&>div]:flex [&>div]:flex-col [&>div]:gap-3 [&>div>img]:!h-20 [&>div>img]:!w-20 [&>div]:text-center [&>div]:lg:text-left">
      <div>
        <img src={schedule} alt="schedule" />
        <h3>Set a better deadline tasks</h3>
        <p>You can make your duty deadlines better and more orderly</p>
    </div>
    <div>
        <img src={layers} alt="layers" />
        <h3>Manage the tasks so easily</h3>
        <p>You can manage the deadlines and the schedule becomes easy</p>
    </div>
    <div>
        <img src={notification} alt="notification" />
        <h3>Wouldn’t miss notifications</h3>
        <p>Of course you will always get the tasks and schedule notifications</p>
    </div>
    </div>
    </div>
  )
}

export default Services