// src/pages/PlaceDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  LoaderCircle,
  Info,
  Building2,
} from "lucide-react";

export default function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://knowtheplace-backend.onrender.com/api/place/${id}`)
      .then((res) => res.json())
      .then((data) => setPlace(data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin w-12 h-12 text-indigo-500" />
      </div>
    );
  }

  if (!place) {
    return <p className="text-center text-red-500 mt-10">Place not found.</p>;
  }

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-purple-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10 drop-shadow-sm">
        🧭 {place.name} - Full Details
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-6 max-w-4xl mx-auto"
      >
        {/* Basic Info */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-indigo-700 font-semibold">
            <MapPin size={20} />
            Basic Information
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            {Object.entries(place.geminiData.basicInfo || {}).map(([k, v]) => (
              <li key={k}>
                <strong>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </section>

        {/* Dynamic Sections */}
        {Object.entries(place.geminiData).map(([key, value]) => {
          if (key === "basicInfo" || typeof value !== "object" || !value) return null;

          return (
            <section key={key} className="mb-6">
              <div className="flex items-center gap-2 mb-1 text-indigo-700 font-semibold capitalize">
                <Building2 size={20} />
                {key.replace(/([A-Z])/g, " $1")}
              </div>
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <li key={subKey}>
                    <strong>{subKey}:</strong>{" "}
                    {typeof subValue === "object"
                      ? Object.entries(subValue)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(" | ")
                      : String(subValue).replace(/[{"()}/[\]]/g, "")}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </motion.div>
    </div>
  );
}
