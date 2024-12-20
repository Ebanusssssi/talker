import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-2">
      <input 
        type="text" 
        placeholder="Search" 
        className="placeholder:text-dark-text dark:placeholder:text-light-text
        placeholder:font-semibold w-full py-2 md:py-1.5 px-2 shadow-custom-light-inset 
        dark:shadow-custom-dark-inset bg-light-bg dark:bg-dark-bg rounded-md 
        outline-none font-outfit"
      />
      <CgSearch 
        className="absolute right-2 top-[50%] translate-y-[-50%]
      text-dark-text/50 dark:text-light-text/50 pointer-events-none"/>
    </div>
  )
}

export default Search