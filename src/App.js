import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/loki" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
