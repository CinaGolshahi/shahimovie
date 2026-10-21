import { Link } from "react-router-dom";

interface IBreadcrumbItems {
  label: string | undefined;
  link?: string | undefined;
}
interface IBreadcrumb {
  items: IBreadcrumbItems[];
}
const Breadcrumb = ({ items }: IBreadcrumb) => {
  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-gray-900/50 p-2 text-sm outline outline-gray-50/10 backdrop-blur-lg xl:m-0">
      <p className="line-clamp-1 text-gray-400 select-none **:transition-all **:delay-75 **:duration-300 *:last:text-gray-100">
        {items.map((item, index) => (
          <span key={index}>
            {index !== items.length - 1 ? (
              <Link to={`${item.link}`} className="hover:text-gray-200">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && " / "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Breadcrumb;
