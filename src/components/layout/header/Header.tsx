import Logo from "../../ui/logo";

const Header = () => {
  return (
    <header className="inset-x-0 top-2 container mx-auto h-12 xl:fixed xl:px-2">
      <div className="flex size-full items-center bg-gray-900/60 ps-4 backdrop-blur-lg xl:rounded-full">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
