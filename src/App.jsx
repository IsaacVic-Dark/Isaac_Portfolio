import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Cert from "./pages/Cert";
import Projects from "./pages/Projects";
import Exp from "./pages/Exp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiance" element={<Exp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Cert />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
