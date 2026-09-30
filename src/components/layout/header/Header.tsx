import { useState } from "react";
import SearchModal from "../../shared/Search/SearchModal";
import SearchTrigger from "../../shared/Search/SearchTrigger";
import Logo from "../../ui/logo";
import MenuNavbar from "../MenuNavbar/MenuNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const closeModal = () => setIsSearchOpen(false);
  const openModal = () => setIsSearchOpen(true);

  return (
    <header className="inset-x-0 z-30 mx-auto h-12 w-full xl:fixed xl:top-2 xl:container xl:px-2">
      <div className="flex size-full items-center justify-center border-gray-50/10 bg-gray-900/60 backdrop-blur-lg xl:justify-between xl:rounded-full xl:border xl:ps-4">
        <Logo />

        <div className="hidden h-full items-center xl:flex">
          <MenuNavbar />
        </div>

        <div className="relative hidden h-full w-48 items-center justify-end px-2 xl:flex">
          <SearchTrigger openModal={openModal} />
        </div>

        {isSearchOpen && <SearchModal closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
