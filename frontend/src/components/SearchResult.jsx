import User from "../assets/1.jpg"

const SearchResult = () => {
  return (
    <div className="mt-1 overflow-hidden">
      <div 
        className="py-1.5 px-1.5 rounded-md flex items-center gap-1.5
      bg-light-bg/50 dark:bg-dark-bg/50 hover:shadow-custom-light-inset
        dark:hover:shadow-custom-dark-inset cursor-pointer"
      >
          <div className="min-w-10 h-10 rounded-md overflow-hidden">
            <img 
              src={User} 
              alt="user-image" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <div className="flex flex-col text-dark-text dark:text-light-text">
            <span className="text-sm font-semibold font-outfit">Vadym</span>
            <span className="whitespace-nowrap flex-nowrap text-xs font-normal font-outfit text-dark-text/40 dark:text-light-text/30">
              last seen 1 hour ago
            </span>
          </div>
      </div>
    </div>
  )
}

export default SearchResult