import User from "../assets/1.jpg"

const Message = () => {
  return (
    <div 
      className="my-2 max-w-[50%]"
    >
      <div className="flex items-end gap-3">
        <div 
          className="min-w-10 max-w-10 h-10 rounded-md overflow-hidden 
          shadow-custom-light dark:shadow-custom-dark">
          <img 
            src={User} 
            alt="user-image" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        <div 
          className="max-w-[80%] h-fit py-2 px-3
          shadow-custom-light dark:shadow-custom-dark 
          rounded-md cursor-pointer"
        >
          <span 
            className="flex-nowrap font-semibold 
            font-outfit text-dark-text/80 dark:text-light-text">
            I have seen you yesterday Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt ea dolore nostrum rem temporibus placeat dolores alias tempore saepe ut suscipit delectus quo labore, adipisci dignissimos dolor earum, minima libero quibusdam est repellat. Est, ducimus id magni laboriosam sed autem adipisci quaerat natus rerum esse recusandae fuga inventore cupiditate alias aperiam officiis iure eveniet placeat neque deleniti error? Deserunt consequuntur ab corporis ut eius. Quas exercitationem architecto, maxime sed ea ut explicabo, dolorum dicta voluptas tempore quam fugit neque voluptate? Totam, quod adipisci aliquam cumque aut minus vitae tempora facere illo fugiat quibusdam aliquid? Nobis assumenda iure et animi!
          </span>
        </div>
      </div>
    </div>
  )
}

export default Message