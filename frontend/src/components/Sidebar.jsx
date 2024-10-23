import ChatList from './ChatList'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div 
      className="w-full pb-2 sm:min-w-[260px] h-full flex-[1] text-sm font-semibold
      text-dark-text dark:text-light-text overflow-x-hidden overflow-y-hidden
      font-outfit md:border-r-2 md:border-white/30 dark:border-black/10"
    >
      <Navbar />
      <ChatList />
    </div>
  )
}

export default Sidebar