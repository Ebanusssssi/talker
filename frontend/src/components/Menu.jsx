import { IoMenu } from "react-icons/io5";

const Menu = () => {
  return (
    <div>
      <IoMenu 
        className="min-w-[30px] md:min-w-[25px] h-full py-2
        rounded-tl-md cursor-pointer text-dark-text dark:text-light-text
      md:text-dark-text/20 dark:md:text-light-text/20
      hover:text-dark-text dark:hover:text-light-text"/>
    </div>
  )
}

export default Menu