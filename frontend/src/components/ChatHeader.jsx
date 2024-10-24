import { CgSearch } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";


const ChatHeader = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-3 px-3 shadow-custom-light-inset dark:shadow-custom-dark-inset bg-light-bg dark:bg-dark-bg rounded-md">
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm font-semibold font-outfit text-dark-text dark:text-light-text">
            Vadym
          </p>
          <span className="text-xs font-normal font-outfit text-dark-text/80 dark:text-light-text/80">
            Last seen 1 hour ago
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
            shadow-custom-light dark:shadow-custom-dark
            active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset rounded-md py-2 px-2 cursor-pointer">
            <CgSearch 
              className="min-w-5 min-h-5 text-dark-text dark:text-light-text"/>
          </div>
          <div 
            className="bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
            shadow-custom-light dark:shadow-custom-dark
            active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset rounded-md py-2 px-2 cursor-pointer">
            <IoMdCall 
              className="min-w-5 min-h-5 text-dark-text dark:text-light-text"/>
          </div>
          <div 
            className="bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
            shadow-custom-light dark:shadow-custom-dark
            active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset rounded-md py-2 px-2 cursor-pointer">
            <FiSidebar 
              className="min-w-5 min-h-5 text-dark-text dark:text-light-text"/>
          </div>
          <div 
            className="bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
            shadow-custom-light dark:shadow-custom-dark
            active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset rounded-md py-2 px-2 cursor-pointer">
            <BsThreeDotsVertical  
              className="min-w-5 min-h-5 text-dark-text dark:text-light-text"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader