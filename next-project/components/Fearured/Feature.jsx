"Use Client";

import Slider from "react-slick";

const Feature = () => {
const data = [
  {id:1, url:`/card/card1.jpg`, name:"luxury buildings", text:"constrcution"},
  {id:2, url:`/card/card2.jpg`, ame:"luxury buildings", text:"constrcution"},
  {id:3, url:`/card/card3.jpg` , ame:"luxury buildings", text:"constrcution"},
  {id:4, url:`/card/card4.jpg`, ame:"luxury buildings", text:"constrcution"},
  {id:5, url:`/card/card5.jpg` , ame:"luxury buildings", text:"constrcution"},
]

var settings = {
  dots: true,
  infinite:  true,
  autoplay: true,
    autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
      <section className="banner2  h-auto py-[50px]  bg-fixed">
        <div className="xl:w-[60%] w-[95%] mx-auto h-full ">
          <div className="">
            <h1 className="  uppercase text-[20px] text-const-text font-[600]">
              FEATURED WORK
            </h1>
            <div className="w-[50px] h-[2px] bg-const-btn  mt-2"></div>
          </div>
          <div className=" mt-[70px]">
          <Slider className="" {...settings}>
          {data.map((ele) => (
  <div  className="w-full h-[370px] object-cove overflow-hidden  transition-all duration-200 group hover:border-b-[10px] hover:border-const-btn">
  <img  className=" w-full h-[370px]  group-hover:scale-[1.08] transition-all duration-200 ease-in-out " src={ele.url} alt="" />
  </div>
))}
          </Slider>
          </div>
   

        </div>
      </section>
    </>
  );
};

export default Feature;
