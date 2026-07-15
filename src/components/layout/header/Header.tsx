import Logo from "../../ui/logo";
import Categories from "../../shared/categories";

const Header = () => {
  return (
    <header className="inset-x-0 top-2 container mx-auto h-12 xl:fixed xl:px-2">
      <div className="bg-blur flex size-full items-center xl:justify-between xl:rounded-full">
        <Logo />

        <Categories />

        <div className="h-full w-48"></div>
      </div>
    </header>
  );
};

export default Header;
