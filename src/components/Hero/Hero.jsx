import heroImg from "../../assets/heroImage.png";

function Header() {
  return (
    <div id="home" className="">
      <div className="w-full xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto">
        <div className="lg:w-[50%] flex flex-col gap-[30px] xl:py-8 pt-12 xl:pt-[6rem]">
          <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-semibold">
            Manage Schedule and Task Easy
          </h1>
          <p className="text-[16px] md:text-[18px]">
            Create and organize schedule and task deadline become better, easy
            manage and certainly no longer lagging behind schedule of activities
            and task
          </p>
          <div className="">
            <button
              className={`transition-all ease-in duration-500 px-[58px] py-6 border-2 text-[16px] rounded-full cursor-pointer hover:duration-500 text-white bg-blue inline-block`}
            >
              Download App
            </button>
          </div>
        </div>
      </div>
          <img
            src={heroImg}
            alt=""
            className="z-[-10] mx-auto lg:absolute lg:top-0 lg:right-0 lg:w-[40%] md:max-w-[500px] w-[100%] lg:rounded-bl-[70px] pt-10 lg:pt-0"
          />
    </div>
  );
}

export default Header;
