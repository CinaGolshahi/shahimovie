import Categories from "../../shared/categories";
import Logo from "../../ui/logo";

const Header = () => {
  return (
    <header className="inset-x-0 z-40 mx-auto h-12 w-full xl:fixed xl:top-2 xl:container xl:px-2">
      <div className="flex size-full items-center justify-center border-gray-50/10 bg-gray-900/60 backdrop-blur-lg xl:justify-between xl:rounded-full xl:border xl:ps-4">
        <Logo />

        <Categories />

        <div className="hidden h-full w-48 xl:block"></div>
      </div>
    </header>
  );
};

export default Header;
