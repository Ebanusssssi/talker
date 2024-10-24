import { useState } from "react";
import User from "../assets/1.jpg"
import { TiPinOutline } from "react-icons/ti";

const ChatItem = () => {
  const [pinned, setPinned] = useState(false)


  return (
    <div className="overflow-hidden">
      <div 
        className="py-2 px-2 mx-2.5 my-1.5 rounded-md flex items-center
        active:shadow-custom-light-inset shadow-custom-light dark:shadow-custom-dark ring-2 ring-transparent
        dark:active:shadow-custom-dark-inset cursor-pointer"
      >
        <div className="w-full h-full flex justify-between">

          <div className="flex gap-1.5 max-w-[80%] h-full">
            <div className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden">
              <img 
                src={User} 
                alt="user-image" 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            <div className="flex flex-col justify-between truncate">
              <span className="text-sm font-semibold font-outfit text-dark-text dark:text-light-text">Vadym</span>
              <span 
                className="flex-nowrap font-semibold truncate
                font-outfit text-dark-text/50 dark:text-light-text">
                I have seen her yesterday there, she was drunk as fuc, hahahahah, she fell on the street
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between gap-2 w-fit sm:min-w-fit">
            <span className="text-xs text-end text-dark-text dark:text-light-text">11:24 PM</span>
           {pinned && <TiPinOutline onClick={() => setPinned(prev => !prev)} className="text-dark-text dark:text-light-text min-w-4 min-h-4"/>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChatItem