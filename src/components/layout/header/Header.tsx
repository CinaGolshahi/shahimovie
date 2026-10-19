import { useState } from "react";
import { SearchModal, SearchTrigger } from "../../shared/search";
import Logo from "../../ui/logo";
import MenuNavbar from "../menu-navbar/MenuNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const closeModal = () => setIsSearchOpen(false);
  const openModal = () => setIsSearchOpen(true);

  return (
    <header className="fixed inset-x-0 top-2 z-30 container mx-auto flex items-center justify-between rounded-full bg-gray-900/50 px-2 outline outline-gray-50/10 backdrop-blur-lg *:flex *:h-full ps-3">
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
    </header>
  );
};

export default Header;
