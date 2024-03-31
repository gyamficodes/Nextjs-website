"use client";


const Service = () => {
  const cards = [
    {
      id: 1,
      title: " Construction Consultant",
      icon: "construction",
      text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 1,
      title: "Architectural Design",
      icon: "architecture",
      text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 1,
      title: "Electrical System",
      icon: "electrical_services",
      text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 1,
      title: "General Contracting",
      icon: "engineering",
      text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 1,
      title: "Resconstruction Services",
      icon: "tools_power_drill",
      text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
        id: 1,
        title: "Plumbilg Services",
        icon: "plumbing",
        text: "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
      },
  ];

  return (
    <section className="h-auto py-[100px] bg-const-text">
      <div className="xl:w-[60%] w-[95%] mx-auto">
        <div className=" flex items-center justify-center flex-col">
          <h1 className=" text-[25px] text-const-footer-nav font-[500]">
            MAIN SERVICES
          </h1>
          <span className="w-[50px] h-[2px] bg-const-btn  mx-auto"></span>
        </div>
        <div className=" grid md:grid-cols-2  lg:grid-cols-3 w-full gap-[4em] mt-[70px]">
          {/* card */}
          {cards.map((card, id) => (
            <div key={id} className="w-full h-auto  flex group cursor-pointer  gap-3">
              <div className="w-[57px] rounded-[100%] h-[57px] bg-const-btn text-const-text flex items-center justify-center group-hover:bg-const-text border-2 border-const-btn transition-all duration-150 ease-in-out">
                <span class="material-symbols-outlined !text-[50px]  group-hover:text-const-btn transition-all duration-150 ease-in-out">
                  {card.icon}
                </span>
              </div>
              <div>
                <h1 className=" text-const-text-p text-[18px]  font-bold">
                  {card.title}
                </h1>
                <p className="text-[13px]  text-[#777] leading-[1.4]">{card.text}</p>
              </div>
            </div>
          ))}

          {/* card */}
        </div>
      </div>
    </section>
  );
};
export default Service;
