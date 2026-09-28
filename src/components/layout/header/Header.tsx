import { Search } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Categories from "../../shared/categories";
import Logo from "../../ui/logo";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <header className="inset-x-0 z-40 mx-auto h-12 w-full xl:fixed xl:top-2 xl:container xl:px-2">
      <div className="flex size-full items-center justify-center border-gray-50/10 bg-gray-900/60 backdrop-blur-lg xl:justify-between xl:rounded-full xl:border xl:ps-4">
        <Logo />

        <Categories />

        <div className="relative hidden h-full w-48 items-center justify-end px-2 xl:flex">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer rounded-full p-2 transition-all delay-75 duration-300 hover:bg-gray-50/10"
          >
            <Search className="size-5" />
          </button>
        </div>

        {isSearchOpen &&
          createPortal(
            <div
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 z-50 flex flex-col items-center bg-gray-950/80 pt-36 backdrop-blur-lg"
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="container flex justify-center gap-2"
              >
                <input
                  autoFocus
                  type="text"
                  name="searchBox"
                  id="searchBox"
                  inputMode="search"
                  placeholder="Search..."
                  className="w-1/3 rounded-full bg-gray-950 p-4 outline-2 outline-gray-900 transition-all duration-300 focus:outline-blue-600"
                />
                <button className="flex aspect-square h-full cursor-pointer place-content-center items-center rounded-full bg-gray-950 outline-2 outline-gray-900 transition-all delay-75 duration-300 hover:outline-blue-600">
                  <Search />
                </button>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </header>
  );
};

export default Header;
