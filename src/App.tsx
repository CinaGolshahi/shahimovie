import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNavbar from "./components/layout/mobile-navbar";
import Home from "./pages/home";
import MoviesPage from "./pages/movies";
import ShowsPage from "./pages/shows";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <div className="pbe-20 xl:pbs-20 xl:pbe-0">
      <Header />
      <MobileNavbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/shows" element={<ShowsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
