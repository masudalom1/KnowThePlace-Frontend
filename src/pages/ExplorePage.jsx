import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query") || "";
  const [searchText, setSearchText] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`https://knowtheplace-backend.onrender.com/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/explore?query=${encodeURIComponent(searchText.trim())}`);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 overflow-x-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Search Places
      </h2>

      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a place..."
          className="px-4 py-2 w-full max-w-md rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : results.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((place) => (
            <div
              key={place._id}
              className="bg-white shadow rounded p-4 border border-gray-200"
            >
              <Link to={`/place/${place._id}`}>
                   <h3 className="text-xl font-bold text-blue-600 hover:underline">{place.name}</h3>
              </Link>
              <p className="text-gray-700 mt-1">Know the place like a local</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-red-600 mt-6 font-semibold">
          Oops! No results found. Please click “AI Explore” again or try another name.
        </div>
      )}
    </div>
  );
}
