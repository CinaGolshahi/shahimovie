import { useState } from "react";
import { SearchModal, SearchTrigger } from "../../shared/search";
import Logo from "../../ui/logo";
import MenuNavbar from "../menu-navbar/MenuNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const closeModal = () => setIsSearchOpen(false);
  const openModal = () => setIsSearchOpen(true);

  return (
    <header className="fixed inset-x-0 top-0 z-30 xl:px-2 xl:pt-2">
      <div className="container mx-auto flex h-12 items-center justify-between bg-gray-900/50 px-2 ps-3 outline outline-gray-50/10 backdrop-blur-lg *:flex xl:rounded-full">
        <div>
          <Logo />
        </div>

        <div className="hidden">
          <MenuNavbar />
        </div>

        <div className="relative hidden w-48 justify-end">
          <SearchTrigger openModal={openModal} />
        </div>

        {isSearchOpen && <SearchModal closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
