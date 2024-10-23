import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-light-bg dark:bg-dark-bg px-1 py-1 overflow-hidden">
      <div 
        className="sm:w-[80%] sm:h-4/5 w-full h-full
        sm:shadow-custom-light dark:sm:sm:shadow-custom-dark flex rounded-lg
        overflow-hidden"
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home