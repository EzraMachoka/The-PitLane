import Drivers from "./Components/Drivers";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


function App() {
  return (
    // Helps to navigate to whatever has been clicked
    <div className="bg-black bg-repeat w-full h-screen text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* creating a route to drivers using BrowserRouter */}
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
