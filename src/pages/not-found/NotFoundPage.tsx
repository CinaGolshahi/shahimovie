import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NotFoundVector from "../../assets/vector/not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-gray-950 py-16 xl:flex-row">
      <div>
        <img src={NotFoundVector} alt="" className="size-72 xl:size-96" />
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-6 xl:items-start">
        <span className="text-3xl font-semibold md:text-5xl">
          Page not found!
        </span>
        <span>We couldn't find the page you were looking for.</span>
        <Link
          to={"/"}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 transition-all delay-75 duration-300 hover:bg-blue-600/90 active:bg-blue-600/90"
        >
          <span>Back to Home</span>
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
