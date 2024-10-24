import Search from "./Search";
import Logout from "./Logout";
import Menu from "./Menu";
import SearchResult from "./SearchResult";


const Navbar = () => {
  return (
    <div 
      className="px-2 py-2 sticky top-0 backdrop-blur rounded-md rounded-tr-none 
      shadow-custom-light-inset dark:shadow-custom-dark-inset">
      <div className="flex items-center justify-between gap-3 md:gap-2 mt-2 sm:mt-0">
        <Menu />
        <Search />
        <Logout />
      </div>
      <SearchResult />
    </div>
  )
}

export default Navbar