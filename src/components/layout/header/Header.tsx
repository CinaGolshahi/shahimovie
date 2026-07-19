import Logo from "../../ui/logo";
import Categories from "../../shared/categories";

const Header = () => {
  return (
    <header className="inset-x-0 z-50 container mx-auto h-12 xl:fixed xl:top-2 xl:px-2">
      <div className="flex size-full items-center justify-center border-gray-50/10 bg-gray-900/60 backdrop-blur-lg xl:justify-between xl:rounded-full xl:border xl:ps-4">
        <Logo />

        <Categories />

        <div className="hidden h-full w-48 xl:block"></div>
      </div>
    </header>
  );
};

export default Header;
