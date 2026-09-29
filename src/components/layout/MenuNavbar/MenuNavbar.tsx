import { Link } from "react-router-dom";

const MenuNavbar = () => {
  return (
    <ul className="hidden h-full items-center gap-2 py-1.5 text-sm xl:flex">
      <li>
        <Link to={"/movies"} className="navbar-item">
          Movies
        </Link>
      </li>
    </ul>
  );
};

export default MenuNavbar;
