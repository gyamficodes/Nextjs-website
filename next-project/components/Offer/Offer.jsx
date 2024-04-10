"use client"




const Offer = () => {
  const items = [
    {
      id: 1,
      image:  `/offer/offer1.jpg`,
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
  
    {
      id: 2,
      image:  `/offer/offer2.jpg`,
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
    {
      id: 1,
      image: `/offer/offer3.jpg`,
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
  ];


  
  return (
    <>
      <section className="h-auto bg-const-gray py-[50px]">
        <div className="xl:w-[60%] w-[95%] mx-auto h-full">
          <div className="">
            <h1 className="  uppercase text-[20px]  text-const-footer-nav font-[500]">
              WHAT WE OFFER
            </h1>
            <div className="w-[50px] h-[2px] bg-const-btn  mt-2"></div>
          </div>

          <div className=" grid grid-cols-3 w-full mt-[70px]" >
              <div className=" w-full h-auto">
               <img className="  w-full h-[220px]" src="/offer/offer1.jpg" alt="image" />
               <h1 className=" text-[20px] text-[#4b4b4b] my-5  capitalize  cursor-pointer  hover:text-const-btn">the green building </h1>
               <p className=" text-[14px] text-[#7777] mt-4">Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna</p>
               <button className=" w-[170px] hover:bg-const-nav  h-[50px] bg-const-btn capitalize mt-5   text-white transition-all ease-in-out duration-100">read more</button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
