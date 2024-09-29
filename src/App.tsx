import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Carrers } from "./pages/Carrers";
import Backend from "./pages/Backend";
import { Success } from "./pages/Success";
import { News } from "./pages/News";
import { Happy } from "./pages/Happy";
import Gallery from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import NotFound from "./components/NotFound";
import InternalServerError from "./components/InternalServerError";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/success" element={<Success />} />
          <Route path="/news" element={<News />} />
          <Route path="/happy" element={<Happy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          <Route path="/500" element={<InternalServerError />} />
          {/* Các route khác */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
