import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Backpack from "./pages/Backpack/Backpack";
import About from "./pages/About/About";
import BivouacChoice from "./pages/BivouacChoice/BivouacChoice";
import Equipment from "./pages/Equipment/Equipment";
import { AuthProvider } from "./contexts/AuthContext";
import { TripProvider } from "./contexts/TripContext";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/bivouac" element={<BivouacChoice />} />
              <Route path="/backpack" element={<Backpack />} />
              <Route path="/equipment" element={<Equipment />} />
            </Routes>
          </div>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
}

export default App;
