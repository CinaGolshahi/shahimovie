import { Languages } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../ui/button";
import Logo from "../../ui/logo";

const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-gray-900/50 pbe-20 xl:pbe-0">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 border-b border-dashed border-gray-500 p-6 md:flex-row md:gap-0">
        <div className="flex flex-col gap-4 md:w-1/3 xl:w-1/5">
          <Logo />
          <span>
            Your gateway to your favorite movies and shows, anytime, anywhere.
          </span>

          <div className="-ms-2 flex items-center justify-start gap-2">
            <Link
              to={"https://www.t.me/shahimovie"}
              target="_blank"
              className="rounded-full border border-transparent p-2 transition-all delay-75 duration-300 hover:bg-gray-800"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8C14.49 8.38 13.84 12.22 13.51 13.99C13.37 14.74 13.09 14.99 12.83 15.02C12.25 15.07 11.81 14.64 11.25 14.27C10.37 13.69 9.87 13.33 9.02 12.77C8.03 12.12 8.67 11.76 9.24 11.18C9.39 11.03 11.95 8.7 12 8.49C12.0069 8.45819 12.006 8.42517 11.9973 8.3938C11.9886 8.36244 11.9724 8.33367 11.95 8.31C11.89 8.26 11.81 8.28 11.74 8.29C11.65 8.31 10.25 9.24 7.52 11.08C7.12 11.35 6.76 11.49 6.44 11.48C6.08 11.47 5.4 11.28 4.89 11.11C4.26 10.91 3.77 10.8 3.81 10.45C3.83 10.27 4.08 10.09 4.55 9.9C7.47 8.63 9.41 7.79 10.38 7.39C13.16 6.23 13.73 6.03 14.11 6.03C14.19 6.03 14.38 6.05 14.5 6.15C14.6 6.23 14.63 6.34 14.64 6.42C14.63 6.48 14.65 6.66 14.64 6.8Z"
                  className="fill-gray-200"
                />
              </svg>
            </Link>
            <Link
              to={"https://www.instagram.com/shahimovie"}
              target="_blank"
              className="rounded-full border border-transparent p-2 transition-all delay-75 duration-300 hover:bg-gray-800"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                  className="fill-gray-200"
                />
              </svg>
            </Link>
            <Link
              to={"https://www.x.com/shahimovie"}
              target="_blank"
              className="rounded-full border border-transparent p-2 transition-all delay-75 duration-300 hover:bg-gray-800"
            >
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M11.025 0H13.172L8.482 5.374L14 12.688H9.68L6.294 8.253L2.424 12.688H0.275L5.291 6.938L0 0.000999987H4.43L7.486 4.054L11.025 0ZM10.27 11.4H11.46L3.78 1.221H2.504L10.27 11.4Z"
                  className="fill-gray-200"
                />
              </svg>
            </Link>
            <Link
              to={"https://www.youtube.com/@shahimovie"}
              target="_blank"
              className="rounded-full border border-transparent p-2 transition-all delay-75 duration-300 hover:bg-gray-800"
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                  className="fill-gray-200"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <ul>
            <li>
              <Link to={"/"} className="hover:underline active:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/movies"} className="hover:underline active:underline">
                Movies
              </Link>
            </li>
            <li>
              <Link to={"/shows"} className="hover:underline active:underline">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to={"/movies"} className="hover:underline active:underline">
                Top Movies
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/faq"} className="hover:underline active:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className="hover:underline active:underline"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to={"/privacy-policy"}
                className="hover:underline active:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to={"/terms-of-service"}
                className="hover:underline active:underline"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-end md:w-1/3 xl:w-1/5">
          <Button variant="btn-secondary">
            <span className="font-bold">English</span>
            <Languages className="mt-0.5 size-5" />
          </Button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
        <p>© 2026 ShahiMovie, All Rights Reserved</p>
        <p>
          <span>Coding by </span>
          <Link
            to={"https://linktr.ee/cinagolshahi"}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Cina Golshahi
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
