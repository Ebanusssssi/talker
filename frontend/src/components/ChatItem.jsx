import User from "../assets/1.jpg"

const ChatItem = () => {
  return (
    <div className="overflow-hidden">
      <div 
        className="py-2 px-2 mx-2 my-1.5 rounded-md flex items-center gap-1.5
        active:shadow-custom-light-inset shadow-custom-light dark:shadow-custom-dark
        dark:active:shadow-custom-dark-inset cursor-pointer"
      >
          <div className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden">
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

export default ChatItem