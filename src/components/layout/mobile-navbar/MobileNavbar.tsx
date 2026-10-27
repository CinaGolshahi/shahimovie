import { Clapperboard, Home, Tv, Users2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <nav className="fixed inset-x-8 bottom-2 z-40 grid grid-cols-4 justify-between rounded-full border border-gray-50/10 bg-gray-900/60 p-1 text-xs backdrop-blur-lg *:relative *:flex *:flex-col *:items-center *:gap-0.5 *:rounded-full *:p-2 *:transition-all *:duration-300 **:flex **:flex-col **:items-center **:gap-0.5 *:before:absolute *:before:-z-10 *:before:rounded-full *:before:bg-blue-600/50 *:before:transition-all *:before:duration-300 xl:hidden">
      <NavLink
        end
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? `bg-blue-600/0 before:inset-0 before:opacity-100` : `before:inset-4 before:opacity-0`}`
        }
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
        className={({ isActive }) =>
          `${isActive ? `bg-blue-600/0 before:inset-0 before:opacity-100` : `before:inset-4 before:opacity-0`}`
        }
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Clapperboard className="size-5" />
            <span>Movies</span>
          </div>
        )}
      </NavLink>
      <NavLink
        to={"/shows"}
        className={({ isActive }) =>
          `${isActive ? `bg-blue-600/0 before:inset-0 before:opacity-100` : `before:inset-4 before:opacity-0`}`
        }
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Tv className="size-5" />
            <span>Shows</span>
          </div>
        )}
      </NavLink>
      <NavLink
        to={"/artists"}
        className={({ isActive }) =>
          `${isActive ? `bg-blue-600/0 before:inset-0 before:opacity-100` : `before:inset-4 before:opacity-0`}`
        }
      >
        {({ isActive }) => (
          <div
            className={`${isActive ? "font-bold text-gray-50" : "text-gray-400"}`}
          >
            <Users2 className="size-5" />
            <span>Artists</span>
          </div>
        )}
      </NavLink>
    </nav>
  );
};

export default MobileNavbar;
