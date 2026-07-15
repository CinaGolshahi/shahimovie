import { ChevronDown } from "lucide-react";

const Categories = () => {
  return (
    <ul className="flex h-full gap-4 py-1.5 font-semibold">
      <li className="group categories-item">
        <span>Movies</span>
        <ChevronDown className="chevron-down" />
      </li>
      <li className="group categories-item">
        <span>TV Shows</span>
        <ChevronDown className="chevron-down" />
      </li>
      <li className="group categories-item">
        <span>Artists</span>
        <ChevronDown className="chevron-down" />
      </li>
    </ul>
  );
};

export default Categories;
