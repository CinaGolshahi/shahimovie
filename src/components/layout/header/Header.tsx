import { startTransition, useEffect, useState } from "react";
import { SearchModal, SearchTrigger } from "../../shared/search";
import Logo from "../../ui/logo";
import MenuNavbar from "../menu-navbar/MenuNavbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        startTransition(() => {
          setIsSearchOpen(true);
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 md:px-4 md:pt-2">
      <div className="container mx-auto flex h-12 items-center justify-between rounded-b-xl bg-gray-900/50 px-2 ps-3 outline outline-gray-50/10 backdrop-blur-lg md:rounded-full">
        <Logo />

        <MenuNavbar />

        <div className="relative flex w-48 justify-end">
          <SearchTrigger toggleSearch={setIsSearchOpen} />
        </div>

        {isSearchOpen && <SearchModal toggleSearch={setIsSearchOpen} />}
      </div>
    </header>
  );
};

export default Header;
