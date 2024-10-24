import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg overflow-hidden">
      <div 
        className="flex sm:w-[80%] sm:h-4/5 w-full h-full
        sm:shadow-custom-light dark:sm:sm:shadow-custom-dark rounded-lg
        overflow-hidden"
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home