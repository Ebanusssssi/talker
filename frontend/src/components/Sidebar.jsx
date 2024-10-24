import ChatList from './ChatList'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div 
      className="flex-[1] w-full h-full sm:min-w-[260px] text-sm font-semibold
      text-dark-text dark:text-light-text font-outfit overflow-y-scroll relative
      divide-y-2 dark:divide-[#232325]/50 divide-white
      [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-dark-bg/20 dark:[&::-webkit-scrollbar-thumb]:bg-light-bg/10"
    >
      <Navbar />
      <ChatList />
    </div>
  )
}

export default Sidebar