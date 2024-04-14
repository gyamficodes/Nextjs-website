

const Awesome = () => {

    const item = [
        { id:1, text:'PROJECT COMPLETED', num:'13691'},
        { id:2, text:'SATISFIED CLIENTS', num:'1725'},
        { id:3, text:'WORKERS EMPLOYED', num:'984'},
    ]

  return (
  <>
  <section  className=" h-auto py-[100px] awesome bg-fixed">
    <div className="xl:w-[60%] w-[95%] mx-auto h-full ">
 <div className=" flex items-center justify-end h-full">
    <div>
        <h1 className=" text-const-text text-[26px] text-right text-[400]">The Construction Company</h1>
        <h1  className="  text-[75px] text-white font-[600]">AWESOME FACTS</h1>

<div className="  flex items-center gap-[2em] justify-end mt-4  ">
    {item.map(e => (
 <div key={e.id} className=" flex items-center flex-col ">
 <h1 className="text-[40px] text-white">{e.num}<span className=" text-const-btn">+</span></h1>
 <h2 className=" text-const-text">{e.text}</h2>
</div>
    ))

    }
    
</div>
    </div>
     </div>
    </div>
  </section>
  
  </>
  )
}

export default Awesome