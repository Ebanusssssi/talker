import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage"

import { IoSend } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaFile } from "react-icons/fa6";


const InputMessage = () => {
  const [message, setMessage] = useLocalStorage("message", '')
  const [sendAnimate, setSendAnimate] = useState(false)

  useEffect(() => {
    if (sendAnimate) {
      setTimeout(() => {
        setSendAnimate(false)
      }, 300)
    }
    
  }, [sendAnimate])
  


  return (
    <div 
      className="mx-[5px] mb-[5px] py-2 px-2 sticky bottom-0 flex items-center gap-3
      shadow-custom-light dark:shadow-custom-dark bg-light-bg dark:bg-dark-bg rounded-md">
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="text" 
        placeholder="Type..." 
        className="w-full py-2 px-2
        placeholder:text-dark-text/50 dark:placeholder:text-light-text/50
        placeholder:font-semibold text-dark-text dark:text-light-text
        shadow-custom-light-inset dark:shadow-custom-dark-inset
      bg-light-bg dark:bg-dark-bg rounded-md
        outline-none font-outfit"
      />
      <div className="relative h-fit group">
        <div
          className="py-2 px-2 flex items-center justify-center bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
          shadow-custom-light dark:shadow-custom-dark
          active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset 
          rounded-md cursor-pointer overflow-hidden">
          <IoAttach className="min-w-5 min-h-5 text-dark-text dark:text-light-text rotate-45"/>
        </div>

        <div 
          className="absolute pb-5 z-[-100] scale-y-0 top-0 left-0 h-fit w-fit
          transform group-hover:-translate-y-[65px] group-hover:scale-y-100 
          px-2 py-2 gap-2
          flex flex-col justify-center items-center rounded-t-md
          bg-light-bg dark:bg-dark-bg
          shadow-custom-light dark:shadow-custom-dark">
          <label htmlFor="filePhoto" className="">
            <input type="file" id="filePhoto" className="hidden" accept="image/*" />
            <MdPhotoSizeSelectActual className="min-w-5 h-auto text-dark-text dark:text-light-text cursor-pointer hover:text-dark-text/60 dark:hover:text-light-text/70"/>
          </label>
          <label htmlFor="fileDocument" className="">
            <input type="file" id="fileDocument" className="hidden" accept=".pdf, video/*, audio/*"/>
            <FaFile className="min-w-5 h-auto text-dark-text dark:text-light-text cursor-pointer hover:text-dark-text/60 dark:hover:text-light-text/70"/>
          </label>
        </div>
      </div>
      <div
        onClick={() => {setMessage(''); setSendAnimate(true);}}
        className="py-2 px-2 bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
        shadow-custom-light dark:shadow-custom-dark
        active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset 
        rounded-md cursor-pointer relative overflow-hidden">
        
        <IoSend className="min-w-5 min-h-5 text-dark-text dark:text-light-text relative z-10"/>
        <div className={`absolute top-[25%] left-[25%] opacity-0 w-5 h-5 bg-black/30 rounded-full pointer-events-none ${sendAnimate && 'animate-ping'}`}></div>
      </div>
    </div>
  )
}

export default InputMessage