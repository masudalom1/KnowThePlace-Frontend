// src/components/Hero.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleExplore = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post("https://knowtheplace-backend.onrender.com/api/get-info", {
        place: query,
      });

      const id = response.data.data._id;
      navigate(`/place/${id}`);
    } catch (err) {
      console.error("Failed to fetch place info", err);
      alert("Error: Unable to get place data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleExplore();
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Any Place with AI Intelligence
        </h1>
        <p className="text-lg text-white mb-6">
          Your smart companion for global exploration
        </p>

        <div className="bg-white rounded-lg shadow-md p-2 flex items-center max-w-xl mx-auto mb-4">
          <input
            type="text"
            placeholder="Enter any location to explore..."
            className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleExplore}
            disabled={loading}
            className="px-4 py-2 bg-white text-gray-600 rounded-r-md hover:text-blue-600"
          >
            {loading ? "⏳" : "🔍"}
          </button>
        </div>

        <button
          onClick={handleExplore}
          disabled={loading}
          className="mt-2 bg-orange-400 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-orange-500 transition"
        >
          {loading ? "Generating..." : "AI Explore"}
        </button>
      </div>
    </div>
  );
}
