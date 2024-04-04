"use client"

import Accordion from "./Accordian";
import Thumbslider from "./Thumbslider";

const About = () => {
    
    const accordionItems = [
        { title: 'We have 30 plus years in the building industry', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.' },
        { title: 'Quality construction continues after the project', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.' },
        { title: 'We use technology to do the job more quickly', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.' },
        { title: 'Employees are continually trained on safety issues', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.' },
        // Add more items as needed
      ];



const images = [
 `/work/work1.jpg`,
 `/work/work2.jpg`,
 `/work/work3.jpg`,
 `/work/work4.jpg`,
 `/work/work1.jpg`,
];
    
  return (
    <>
      <section className=" h-auto bg-const-text py-5">
        <div className="xl:w-[60%] w-[95%] mx-auto h-full">
            <div className=" grid lg:grid-cols-2 gap-5 w-full">
                <div>
            <div className=" mb-7">
<h1 className=" text-[30px] font-[300]  text-const-text-p">WHY CHOOSE US?</h1>
<div className="h-[2px] mt-3 bg-[#ccc] w-full relative z-[1] before:content-[''] before:top-0 before:left-0  before:bottom-0
 before:bg-const-btn before:h-full before:w-[10%] before:absolute before:z-[-1]
"></div>
            </div>

                <Accordion items={accordionItems} />
                </div>
                <div>
                <h1 className=" text-[30px] font-[300]  text-const-text-p capitalize">About us</h1>
<div className="h-[2px] mt-3  bg-[#ccc] w-full relative z-[1] before:content-[''] before:top-0 before:left-0  before:bottom-0
 before:bg-const-btn before:h-full before:w-[10%] before:absolute before:z-[-1]
"></div>
<div className=" mt-8">
<Thumbslider images={images}  />
</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
