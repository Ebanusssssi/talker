import ChatItem from "./ChatItem"

const ChatList = () => {
  return (
    <div className="h-[84%] shadow-custom-light-inset dark:shadow-custom-dark-inset mx-2 rounded-md">
      <div 
      className="h-full pt-1 pb-2 px-2 overflow-y-auto
      [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:bg-dark-bg dark:[&::-webkit-scrollbar-thumb]:bg-light-bg">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

export default ChatList