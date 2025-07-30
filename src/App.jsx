// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails"
import ExplorePage from "./pages/ExplorePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/routes" element={<div>Routes Page</div>} />
        <Route path="/map" element={<div>Map Page</div>} />
        <Route path="/favorites" element={<div>Favorites Page</div>} />
        <Route path="/ai-chat" element={<PlaceDetails/>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </Router>
  );
}
