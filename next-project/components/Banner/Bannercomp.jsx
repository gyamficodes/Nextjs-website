"use client";

import TopNavbar from "../Nav/TopNavbar";
import Navbar from "../Nav/Navbar";

const Banner = () => {
  return (
    <section className="banner h-[100vh]  bg-no-repeat bg-cover bg-center ">
      {/* nav details */}
      <TopNavbar />
      <Navbar />
      {/* nav details */}
      {/* content */}
      <div className="xl:w-[60%] w-[95%] mx-auto ">
        <div className="flex flex-col items-center justify-center leading-[1]  pt-[210px]">
          <div className=" text-center font-bold slide-left">
            <h1 className=" text-const-text lg:text-[70px] text-[25px] sm:text-[40px]">welcome</h1>
          </div>
          <div className="slide-right">
            <h1 className="text-const-text font-bold lg:text-[70px] text-[25px] sm:text-[40px]">
              construction what we do
            </h1>
          </div>
          <p className=" text-const-text leading-5  xl:w-[50%]   text-center mt-3 ">
            Our experience ensures that your projects will be done right and
            with the upmost professionalism.
          </p>
          <div className=" mt-3 w-[170px] hover:bg-[#79706d] flex items-center justify-center text-[17px] cursor-pointer text-white rounded-md h-[50px] capitalize bg-const-btn">learn more</div>

        </div>
      </div>
      {/* content */}
    </section>
  );
};

export default Banner;
