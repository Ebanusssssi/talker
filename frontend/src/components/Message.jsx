import User from "../assets/1.jpg"
import User2 from "../assets/G3.png"

const Message = () => {
  return (
    <div 
      className="w-full flex flex-col gap-7"
    >
      {/* FRIEND */}
      <div className="flex items-end gap-3">
        <div className="flex flex-col items-center gap-1">
          <div 
            className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden 
            shadow-custom-light dark:shadow-custom-dark">
            <img 
              src={User} 
              alt="user-image" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <span className="text-xs text-dark-text/30 dark:text-light-text/30">14:14</span>
        </div>
        <div 
          className="max-w-[50%] h-fit py-3 px-3
          flex flex-col items-start gap-2
          shadow-custom-light dark:shadow-custom-dark 
          rounded-bl-md rounded-3xl"
        >
          <img src={User} alt="message-image" className="w-full h-auto rounded-bl-md rounded-2xl cursor-pointer" />
          <span 
            className="flex-nowrap font-semibold 
            font-outfit text-dark-text/80 dark:text-light-text px-1 py-1">
            I have seen you yesterday Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt ea dolore nostrum rem temporibus placeat dolores alias tempore saepe ut suscipit delectus quo labore, adipisci dignissimos dolor earum, minima libero quibusdam est repellat. Est, ducimus id mag.
          </span>
        </div>
      </div>
      {/* OWNER */}
      <div className="flex flex-row-reverse items-end gap-3">
        <div className="flex flex-col items-center gap-1">
          <div 
            className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden 
            shadow-custom-light dark:shadow-custom-dark">
            <img 
              src={User2} 
              alt="user-image" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <span className="text-xs text-dark-text/30 dark:text-light-text/30">14:14</span>
        </div>
        <div 
          className="max-w-[50%] h-fit py-3 px-3
          flex flex-col items-start gap-2
          shadow-custom-light dark:shadow-custom-dark 
          rounded-br-md rounded-3xl"
        >
          <img src={User2} alt="message-image" className="w-full h-auto rounded-br-md rounded-2xl cursor-pointer" />
          <span 
            className="flex-nowrap font-semibold 
            font-outfit text-dark-text/80 dark:text-light-text px-1 py-1">
            I have seen you yesterday Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </span>
        </div>
      </div>
    </div>
  )
}

export default Message