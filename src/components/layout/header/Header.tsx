import { useState } from "react";
import { SearchModal, SearchTrigger } from "../../shared/search";
import Logo from "../../ui/logo";
import MenuNavbar from "../menu-navbar/MenuNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const closeModal = () => setIsSearchOpen(false);
  const openModal = () => setIsSearchOpen(true);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto h-12 w-full xl:top-2 xl:container xl:px-2">
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
