import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Globe className="text-blue-600" />
          <span className="text-xl font-semibold text-gray-800">KnowThe Place</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/explore" className="hover:text-blue-600">Explore</Link>
          <Link to="/routes" className="hover:text-blue-600">Routes</Link>
          <Link to="/map" className="hover:text-blue-600">Map</Link>
          <Link to="/favorites" className="hover:text-blue-600">Favorites</Link>
          <Link to="/ai-chat" className="hover:text-blue-600">AI Chat</Link>
          <Link to="/profile">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-sm font-medium text-gray-700">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/explore" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Explore</Link>
          <Link to="/routes" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Routes</Link>
          <Link to="/map" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Map</Link>
          <Link to="/favorites" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Favorites</Link>
          <Link to="/ai-chat" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>AI Chat</Link>
          <Link to="/profile" className="block w-8">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
