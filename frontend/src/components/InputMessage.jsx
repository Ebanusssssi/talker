import { IoSend } from "react-icons/io5";

const InputMessage = () => {
  return (
    <div 
      className="w-full py-3 px-3 sticky bottom-0 flex items-center gap-3
      shadow-custom-light dark:shadow-custom-dark bg-light-bg dark:bg-dark-bg rounded-tl-md">
      <input 
        type="text" 
        placeholder="Type..." 
        className="w-full py-2 md:py-2 px-2 
        placeholder:text-dark-text/50 dark:placeholder:text-light-text/50
        placeholder:font-semibold text-dark-text dark:text-light-text
        shadow-custom-light-inset dark:shadow-custom-dark-inset
      bg-light-bg dark:bg-dark-bg rounded-md 
        outline-none font-outfit"
      />
      <div 
        className="py-2 px-2 bg-light-bg text-dark-text dark:bg-dark-bg dark:text-light-text
        shadow-custom-light dark:shadow-custom-dark
        active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset 
        rounded-md cursor-pointer">
        <IoSend className="min-w-5 min-h-5 text-dark-text dark:text-light-text"/>
      </div>
    </div>
  )
}

export default InputMessage