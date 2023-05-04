import "./Styles/App.css";
import Nav from "./Components/Nav.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer.jsx";
import Shortenurl from "./Pages/Shortenurl";
import Custom from "./Pages/Custom";
import GenerateQrcode from "./Pages/GenerateQrcode";
import About from "./Pages/About";
import Bekaidei from "./Pages/Bekaidei";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [url, seturl] = useState("");

  return (
    <div className="App flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shorten"
          element={<Shortenurl url={url} seturl={seturl} />}
        />
        <Route path="/custom" element={<Custom url={url} seturl={seturl} />} />
        <Route path="/genqr" element={<GenerateQrcode />} />
        <Route path="/about" element={<About />} />
        <Route path="/BKD/*" element={<Bekaidei />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
