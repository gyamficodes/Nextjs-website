import React from "react";

const Offer = () => {
  const items = [
    {
      id: 1,
      image: "",
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
    {
      id: 1,
      image: "",
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
    {
      id: 1,
      image: "",
      title: "The Green Building",
      text: "Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna ",
      btn: "read more",
    },
    {
      id: 1,
      image: "",
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
        </div>
      </section>
    </>
  );
};

export default Offer;
