import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNavbar from "./components/layout/mobile-navbar";
import Home from "./pages/home";
import MoviesPage from "./pages/movies/MoviesPage";

const App = () => {
  return (
    <div className="pbe-20 xl:pbs-20 xl:pbe-0">
      <Header />
      <MobileNavbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
