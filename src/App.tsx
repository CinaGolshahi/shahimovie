import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNavbar from "./components/layout/mobile-navbar";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Header />
      <MobileNavbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
