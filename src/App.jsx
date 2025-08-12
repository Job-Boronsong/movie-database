// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails"; // ✅ Import MovieDetails

export default function App() {
  return (
    <Router>
      {/* Navbar will show on all pages */}
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* ✅ Fixed import */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
