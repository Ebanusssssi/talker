import ChatList from './ChatList'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div 
      className="flex-[1] w-full h-full sm:min-w-[260px] text-sm font-semibold
      text-dark-text dark:text-light-text font-outfit overflow-y-scroll relative
      [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-black/20 dark:[&::-webkit-scrollbar-thumb]:bg-white/50
      [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <Navbar />
      <ChatList />
    </div>
  )
}

export default Sidebar