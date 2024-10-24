import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg overflow-hidden">
      <div 
        className=" sm:w-[80%] sm:h-4/5 w-full h-full py-2 px-2
        sm:shadow-custom-light dark:sm:shadow-custom-dark rounded-lg
        overflow-hidden"
      >
        <div className="flex h-full w-full rounded-md shadow-custom-light-inset dark:shadow-custom-dark-inset overflow-hidden">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home