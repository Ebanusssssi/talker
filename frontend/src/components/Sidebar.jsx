import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div 
      className="flex-[1] py-2 px-2 text-sm font-semibold
    text-dark-text dark:text-light-text
      font-outfit md:border-r-2 md:border-white/30 dark:border-black/10">
      <Navbar />
    </div>
  )
}

export default Sidebar