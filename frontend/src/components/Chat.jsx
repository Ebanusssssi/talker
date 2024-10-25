import ChatHeader from "./ChatHeader"
import InputMessage from "./InputMessage"
import MessagesArea from "./MessagesArea"


const Chat = () => {
  return (
    //  !w-0 - to hide / show
    <div 
      className="hidden md:flex md:flex-[2] w-full h-full 
      text-sm font-semibold text-[#141414] font-outfit
      bg-light-bg dark:bg-dark-bg
      shadow-custom-light-inset dark:shadow-custom-dark-inset rounded-md
      overflow-hidden "
    >
      <div className="w-full h-full flex flex-col">
        <ChatHeader />
        <MessagesArea />
        <InputMessage />
      </div>
    </div>
  )
}

export default Chat