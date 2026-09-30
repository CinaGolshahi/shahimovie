import { Home } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import MobileNavbar from "./components/layout/mobile-navbar";
import { MoviesPage, NotFoundPage, SearchPage, ShowsPage } from "./pages";

const App = () => {
  return (
    <div className="xl:pbs-20">
      <Header />
      <MobileNavbar />

      <main>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MoviesPage />} />

          <Route path="/shows" element={<ShowsPage />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
