import Message from "./Message"


const MessagesArea = () => {
  return (
    <div 
      className="h-dvh overflow-y-auto
      flex flex-col gap-7 items-start justify-between py-7 px-3 
      shadow-custom-light-inset dark:shadow-custom-dark-inset
      bg-light-bg dark:bg-dark-bg rounded-md
      [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-black/20 dark:[&::-webkit-scrollbar-thumb]:bg-white/50
      [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <Message />
      <Message />
      <Message />
      <Message />

    </div>
  )
}

export default MessagesArea