import { Home, LayoutGrid, Search, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <nav className="fixed inset-x-2 bottom-2 z-40 grid grid-cols-4 justify-between gap-1 rounded-full border border-gray-50/10 bg-gray-900/60 p-1 backdrop-blur-lg xl:hidden">
      <NavLink
        to={"/"}
        end
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 rounded-full py-2 transition-all duration-300 ${isActive ? `bg-blue-600/50` : ``}`
        }
      >
        <Home className="size-6" />
        <span className="text-sm">Home</span>
      </NavLink>
      <NavLink
        to={"/search"}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 rounded-full py-2 transition-all duration-300 ${isActive ? `bg-blue-600/50` : ``}`
        }
      >
        <Search className="size-6" />
        <span className="text-sm">Search</span>
      </NavLink>
      <NavLink
        to={"/categories"}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 rounded-full py-2 transition-all duration-300 ${isActive ? `bg-blue-600/50` : ``}`
        }
      >
        <LayoutGrid className="size-6" />
        <span className="text-sm">Browse</span>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 rounded-full py-2 transition-all duration-300 ${isActive ? `bg-blue-600/50` : ``}`
        }
      >
        <User2 className="size-6" />
        <span className="text-sm">Profile</span>
      </NavLink>
    </nav>
  );
};

export default MobileNavbar;
