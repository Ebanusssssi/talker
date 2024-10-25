import { useEffect, useState } from "react";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import useLocalStorage from "use-local-storage"

const ModeSwitcher = ({ darkMode }) => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [mode, setMode] = useLocalStorage("darkMode", preference)

  // PASSING MODE TO A PARENT
  useEffect(() => {
    darkMode(mode)
  }, [mode])
  

  return (
    <div 
      onClick={() => setMode(prev => !prev)}
      className="absolute right-[-70px] bottom-1/4 sm:bottom-[initial] sm:right-[initial] 
      sm:top-[-50px] sm:left-1/2 sm:-translate-x-1/2 h-16 sm:w-16
      border-l-4 sm:border-l-0 sm:border-b-4 border-dark-bg dark:border-light-bg 
      rounded-md px-3 sm:py-3 
      cursor-pointer hover:right-[-6px] sm:hover:top-[-0.1%] flex items-center justify-center group z-40"
    >
      <div 
        className="py-2 px-5 rounded-md h-14 sm:h-fit w-fit
      bg-light-bg dark:bg-dark-bg flex items-center justify-center
        shadow-custom-light dark:shadow-custom-dark
         text-lg font-semibold font-outfit relative"
      >
        {!mode ? <IoMoonSharp className="text-dark-bg group-active:rotate-180 group-active:opacity-0" /> : <IoSunny className="text-light-bg group-active:-rotate-180 group-active:opacity-0"/>}
      </div>
    </div>
  )
}

export default ModeSwitcher