import { Film, Home, Search, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <nav className="fixed inset-x-8 bottom-2 z-40 grid grid-cols-4 justify-between rounded-full border border-gray-50/10 bg-gray-900/60 p-1 text-xs backdrop-blur-lg *:flex *:flex-col *:items-center *:gap-0.5 *:rounded-full *:p-2 *:transition-all *:duration-300 **:flex **:flex-col **:items-center **:gap-0.5 xl:hidden">
      <NavLink
        end
        to={"/"}
        className={({ isActive }) => `${isActive && `bg-blue-600/50`}`}
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Home className="size-5" />
            <span>Home</span>
          </div>
        )}
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => `${isActive && `bg-blue-600/50`}`}
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Film className="size-5" />
            <span>Movies</span>
          </div>
        )}
      </NavLink>
      <NavLink
        to={"/search"}
        className={({ isActive }) => `${isActive && `bg-blue-600/50`}`}
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Search className="size-5" />
            <span>Search</span>
          </div>
        )}
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => `${isActive && `bg-blue-600/50`}`}
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <UserCircle className="size-5" />
            <span>Profile</span>
          </div>
        )}
      </NavLink>
    </nav>
  );
};

export default MobileNavbar;
