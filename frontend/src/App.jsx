import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BivouacChoice from "./pages/BivouacChoice/BivouacChoice";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bivouac" element={<BivouacChoice />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
