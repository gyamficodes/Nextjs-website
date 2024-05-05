const Testimonial = () => {
  const img = [
    { id: 1, url: `/test/test1.png` },
    { id: 2, url: `/test/test2.png` },
    { id: 3, url: `/test/test2.png` },
    { id: 4, url: `/test/test4.png` },
    { id: 5, url: `/test/test5.png` },
    { id: 6, url: `/test/test6.png` },
  ];

  return (
    <>
      <section className=" h-auto bg-const-text py-[60px]">
        <div className="xl:w-[60%] w-[95%] mx-auto h-full">
          <div className=" grid lg:grid-cols-2 gap-5 w-full">
            <div>
              <div className=" mb-7">
                <h1 className=" text-[22px] font-[300]  text-const-text-p uppercase">
                  our partners
                </h1>
                <div
                  className="h-[3px] mt-3 bg-[#ccc] w-full relative z-[1] before:content-[''] before:top-0 before:left-0  before:bottom-0
 before:bg-const-btn before:h-full before:w-[10%] before:absolute before:z-[-1]
"
                ></div>

                <div className="  grid sm:grid-cols-2  md:grid-cols-3 w-full gap-3 mt-[50px]">
                  {img.map((item) => (
                    <img
                      className=" w-full"
                      key={item.id}
                      src={item.url}
                      alt="pic"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-[25px] font-[300]  text-const-text-p  uppercase">
                TESTIMONIALS
              </h1>
              <div
                className="h-[3px] mt-3  bg-[#ccc] w-full relative z-[1] before:content-[''] before:top-0 before:left-0  before:bottom-0
 before:bg-const-btn before:h-full before:w-[10%] before:absolute before:z-[-1]
"
              ></div>

              <div className=" mt-[50px]">
                
                <div className=" w-full h-auto">
                  <div className=" h-[150px]  bg-const-gray px-3 py-2 flex items-center justify-end">
                    <h1 className=" text-[15px]">
                  Your efficient planning, scheduling, management, and supervision resulted in timely completion and a quality facility...Particularly refreshing was the spirit of cooperation demonstrated by your firm which served to minimize costly delays and contract modifications.
                    </h1>
                  </div>
                  <div></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
