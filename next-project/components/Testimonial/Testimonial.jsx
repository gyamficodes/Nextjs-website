import Slider from "react-slick";

const Testimonial = () => {
  const img = [
    { id: 1, url: `/test/test1.png` },
    { id: 2, url: `/test/test2.png` },
    { id: 3, url: `/test/test2.png` },
    { id: 4, url: `/test/test4.png` },
    { id: 5, url: `/test/test5.png` },
    { id: 6, url: `/test/test6.png` },
  ];


  const TestiCard = [
    { id: 1, url: `/monial/mo3.jpg`,text: " Your efficient planning, scheduling, management, and supervision resulted in timely completion and a quality facility...Particularly refreshing was the spirit of cooperation demonstrated by your firm which served to minimize costly delays and contract modifications.", names: "DON PAULSON", title: "Architectural Co."},
    // { id: 2, url: `/monial/mo3.jpg`,text: " Your efficient planning, scheduling, management, and supervision resulted in timely completion and a quality facility...Particularly refreshing was the spirit of cooperation demonstrated by your firm which served to minimize costly delays and contract modifications.", names: "DON PAULSON", title: "Architectural Co."},
    // { id: 3, url: `/monial/mo3.jpg`,text: " Your efficient planning, scheduling, management, and supervision resulted in timely completion and a quality facility...Particularly refreshing was the spirit of cooperation demonstrated by your firm which served to minimize costly delays and contract modifications.", names: "DON PAULSON", title: "Architectural Co."},
  ]

  var settings = {
    dots: true,
    infinite:  true,
    autoplay: true,
      autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
                      
              <div className=" mt-[50px] ">
               
                  {  TestiCard.map(({id,text, title, url, names}) => (
                           <div key={id} className=" w-full h-[370px]  ">
                           <div className=" h-[150px]  bg-const-gray px-3 py-2 flex items-center justify-end">
                             <h1 className=" text-[16px]  italic text-[#777]">
                           {text}
                             </h1>
                           </div>
                           <div className=" flex items-center justify-between px-[30px] mt-6">
                             <div className="  flex items-center gap-2">
                                 <img className="rounded-[50%]" width={90} height={90} src={url} alt="" />
                                 <div>
                                    <h1 className=" font-bold">{names}</h1>
                                    <h2 className="text-[14px]">{title}</h2>
                                 </div>
                             </div>
                             <div className=" flex items-center gap-1">
                             <span class="material-symbols-outlined text-const-btn">star</span>
                             <span class="material-symbols-outlined text-const-btn">star</span>
                             <span class="material-symbols-outlined text-const-btn">star</span>
                             <span class="material-symbols-outlined text-const-btn">star</span>
                             </div>
                           </div>
                          </div>  
                        )) 

                        }
           
               

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
