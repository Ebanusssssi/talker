import User from "../assets/1.jpg"

const SearchResult = () => {
  return (
    <div className="pb-2 pt-4 px-2 overflow-hidden">
      <div 
        className="py-1.5 px-1.5 rounded-md flex items-center gap-1.5
      bg-light-bg/50 dark:bg-dark-bg/50 shadow-custom-light dark:shadow-custom-dark active:shadow-custom-light-inset
        dark:active:shadow-custom-dark-inset cursor-pointer"
      >
          <div className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden">
            <img 
              src={User} 
              alt="user-image" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="text-sm font-semibold font-outfit text-dark-text dark:text-light-text">Vadym</span>
            <span className="text-xs font-normal font-outfit text-dark-text/80 dark:text-light-text/80 truncate">
              last seen 1 hour ago
            </span>
          </div>
      </div>
    </div>
  )
}

export default SearchResult