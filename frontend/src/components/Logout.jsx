import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div>
      <BiLogOut 
        className=" min-w-[30px] md:min-w-[25px] h-full py-2 cursor-pointer 
      text-dark-text dark:text-light-text md:text-dark-text/20
      dark:md:text-light-text/20 hover:text-dark-text dark:hover:text-light-text"/>
    </div>
  )
}

export default Logout