"Use Client";
import Image from "next/image";
import logo from "../../assets/images/banner/logo-light.png";
import { useState , useEffect} from "react";


const Navbar = () => {
const [isOpen , setIsOpen] = useState(true)

function  handdleOpen() {
     setIsOpen( !isOpen)
} 


useEffect(() => {

  const  handdlescroll = () => {
    let  navcomp = document.querySelector('#nav');
        let scrollPosition  = window.scrollY;
        const scroll = scrollPosition.toFixed(0);
        if(scroll >= 70){
          navcomp.style.position = 'fixed';
          navcomp.style.top = 0;
          navcomp.style.left = 0;
          navcomp.style.right = 0;
          navcomp.style.zIndex = 9999;
        }
        if(scroll == 0){
          navcomp.style.position = 'relative';
        }
  }

window.addEventListener('scroll', handdlescroll);

},[])


  return (
    <div id="nav"  className="h-[70px] bg-const-nav  transition-all duration-200 ease-in-out">
      <div className="xl:w-[60%] w-[95%] mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          {/* logo */}
          <Image className=" cursor-pointer" src={logo} />
          {/* logo */}
          {/* links */}
          <div className="  items-center gap-6 lg:flex hidden">
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className="  text-[15px] capitalize font-[500]">home</h1>
                  <i class="lni lni-chevron-down group-hover:rotate-180 !text-[12px] duration-150 ease-in-out"></i>
              </div>
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className="  text-[15px] capitalize font-[500]">pages</h1>
                  <i class="lni lni-chevron-down group-hover:rotate-180 !text-[12px] duration-150 ease-in-out"></i>
              </div>
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className="  text-[15px] capitalize font-[500]">element</h1>
                  <i class="lni lni-chevron-down group-hover:rotate-180 !text-[12px] duration-150 ease-in-out"></i>
              </div>
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className="  text-[15px] capitalize font-[500]">portfolio</h1>
                  <i class="lni lni-chevron-down group-hover:rotate-180 !text-[12px] duration-150 ease-in-out"></i>
              </div>
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className="  text-[15px] capitalize font-[500]">blog</h1>
              </div>
              <div className="flex items-center group gap-1 text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out">
                  <h1 className=" text-[15px] capitalize font-[500]">contact</h1>
              </div>
              
              <i class="lni lni-search  !text-const-text cursor-pointer hover:text-const-btn transition-all duration-150 ease-in-out"></i>
             <div className="relative gap- flex w-full">
             <i class="lni lni-cart-full  !text-const-text cursor-pointer !hover:text-const-btn transition-all duration-150 ease-in-out"></i>
             <d className="w-[13px] h-[13px]  text-white right-[-10px] flex  items-center justify-center text-[11px] absolute  bg-const-btn rounded-full">3</d>
   

             </div>
             
          </div >
             {/* links */}
             {/* menu icon*/}
              <div className=" lg:hidden flex">
                {isOpen ?
                     (<i onClick={handdleOpen} class="lni lni-menu !text-const-text cursor-pointer !text-[30px]"></i>):

                    (<i onClick={handdleOpen} class="lni lni-close !text-const-text cursor-pointer !text-[30px]"></i>)
                }
              </div>
             {/* menu icon*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
