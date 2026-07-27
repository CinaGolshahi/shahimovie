import { Link } from "react-router-dom";
import Button from "../../ui/button";

const Categories = () => {
  return (
    <ul className="hidden h-full gap-2 py-1.5 xl:flex">
      <Button variant="btn-text" size="btn-sm">
        <Link to={"/moviees"}>Movies</Link>
      </Button>
      <Button variant="btn-text" size="btn-sm">
        <Link to={"/shows"}>TV Shows</Link>
      </Button>
      <Button variant="btn-text" size="btn-sm">
        <Link to={"/artists"}>Artists</Link>
      </Button>
    </ul>
  );
};

export default Categories;
