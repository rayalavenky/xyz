import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Industries from "./Pages/Industries";
import Krishi from "./Pages/Krishi";
import RPTO from "./Pages/RPTO";
import Contact from "./Pages/Contact";
import Header from "./Pages/Layout/Header";


function App() {
  return (
    <BrowserRouter> 
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/krishi" element={<Krishi />} />
          <Route path="/rpto" element={<RPTO />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
