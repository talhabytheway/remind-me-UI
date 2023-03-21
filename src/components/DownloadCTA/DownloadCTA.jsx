import React from 'react'
import ellipse from '../../assets/ellipse.svg'

const DownloadCTA = () => {
  return (
    <div className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full">
    <div className=' bg-blue relative px-8 md:px-10 lg:px-20 py-[50px] md:py-[70px] lg:py-[100px] flex flex-col flex-wrap content-center rounded-[35px] md:rounded-[50px] lg:rounded-[50px] overflow-hidden'>
      <div className="text-2xl md:text-3xl lg:text-4xl pb-6 md:pb-8 lg:pb-12 font-semibold text-center text-white max-w-[756px] z-[1]">Download an app now and the various benefits you will get immediately</div>
      <div className="mx-auto flex md:flex-row flex-col content-center z-[1]">
            <button
              className={`transition-all m-2 ease-in duration-500 px-10 py-3 border-2 text-[16px] rounded-full cursor-pointer hover:duration-500 text-blue bg-white inline-block`}
            >
              Download App
            </button>
            <button
              className={`transition-all m-2 ease-in duration-500 px-10 py-3 border-2 text-[16px] rounded-full cursor-pointer hover:duration-500 text-white inline-block`}
            >
              About App
            </button>
          </div>
          <img src={ellipse} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] w-auto absolute top-[-60%] left-[-27%] lg:left-[-15%] z-[0]'/>
          <img src={ellipse} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] w-auto absolute bottom-[-60%] right-[-27%] lg:right-[-15%] z-[0]'/>
          </div>
    </div>
  )
}

export default DownloadCTA