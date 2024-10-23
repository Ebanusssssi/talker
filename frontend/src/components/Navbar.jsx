import Search from "./Search";
import Logout from "./Logout";
import Menu from "./Menu";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-2 mt-2 sm:mt-0">
      <Menu />
      <Search />
      <Logout />
    </div>
  )
}

export default Navbar