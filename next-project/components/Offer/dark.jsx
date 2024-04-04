
"use client"
import { useEffect, useState } from "react";

const Dark = () => {
  const [theme, setTheme] = useState("dark_mode");
  const options = [
    { text: "dark_mode", icon: "dark_mode" },
    { text: "light_mode", icon: "light_mode" },
  ];

  useEffect(() => {
    if (theme === 'dark_mode') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
   <>
   <section className=" h-auto bg-const-gray py-10">
    <div className="xl:w-[60%] w-[95%] mx-auto h-full">
    <div className="App bg-white text-black dark:bg-slate-900 dark:text-white">
      <div className="fixed top-5 z-[99999999] right-10 duration-200 bg-slate-800 dark:bg-slate-700">
        {options.map((opt) => (
          <button
            onClick={() => setTheme(opt.text)}
            key={opt.text}
            className={`w-8 h-8 text-xl leading-9 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <span className="material-symbols-outlined">{opt.icon}</span>
          </button>
        ))}
      </div>
    
        <p className="duration-150 text-blue-300  dark:text-white">Hello please this is slot</p>
 
    </div>
        
    </div>
   </section>
   </>
  )
}

export default Dark


