const TopNavbar = () => {
  return (
    <>
      <div className=" hidden lg:flex h-[50px] bg-const-nav border-b border-b-const-border">
        <div className="xl:w-[60%] w-[95%] mx-auto h-full">
          <div className=" flex items-center justify-between h-full">
            {/* icons */}
            <div className=" flex  items-center gap-4">
              <i className="lni lni-twitter-original  !text-[13px]   !text-const-text"></i>
              <i className="lni lni-facebook-line  !text-[13px]   !text-const-text"></i>
              <i className="lni lni-google  !text-[13px]   !text-const-text"></i>
              <i className="lni lni-pinterest  !text-[13px]   !text-const-text"></i>
              <i className="lni lni-dribbble  !text-[13px]   !text-const-text"></i>
            </div>
            {/* icons */}
            {/* links */}
            <div className=" flex items-center gap-4">
              <div className=" flex items-center gap-3">
                <i class="lni lni-phone  !text-[13px]   !text-const-text"></i>
                <h1 className="  text-const-text text-[13px]">
                  +1 718-999-3939
                </h1>
              </div>
              <div className=" flex items-center gap-3">
                <i class="lni lni-envelope  !text-[13px]   !text-const-text"></i>
                <h1 className="  text-const-text text-[13px]">
                contact@construction.com 
                </h1>
              </div>
              <div className=" flex items-center gap-3">
                <i class="lni lni-alarm-clock  !text-[13px]   !text-const-text"></i>
                <h1 className="  text-const-text text-[13px]">
                Mon-Fri: 7:00 - 17:00
                </h1>
              </div>
            </div>
            {/* links */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
