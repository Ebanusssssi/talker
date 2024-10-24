import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div
      className="min-w-[30px] md:min-w-[25px] min-h-[30px] md:min-h-[25px] 
      px-2 py-0.5 flex items-center justify-center bg-light-bg/50 dark:bg-dark-bg/50
      shadow-custom-light dark:shadow-custom-dark active:shadow-custom-light-inset
      dark:active:shadow-custom-dark-inset rounded-md group cursor-pointer">
      
      <BiLogOut 
        className=" min-w-[30px] md:min-w-[25px] min-h-[30px] md:min-h-[25px] cursor-pointer 
      text-dark-text dark:text-light-text md:text-dark-text
      dark:md:text-light-text group-hover:text-dark-text dark:group-hover:text-light-text"/>
    </div>
  )
}

export default Logout