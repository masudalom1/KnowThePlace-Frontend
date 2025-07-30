const recentSearches = [
  { city: "Paris", country: "France", time: "2 hours ago" },
  { city: "New York", country: "USA", time: "1 day ago" },
  { city: "Sydney", country: "Australia", time: "2 days ago" },
  { city: "Mumbai", country: "India", time: "3 hours ago" },
  { city: "Kolkata", country: "India", time: "6 hours ago" },
  { city: "Bangalore", country: "India", time: "4 days ago" },
  { city: "Guwahati", country: "India", time: "2 days ago" },
];

export default function RecentSearches() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Searches</h2>
      <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
        {recentSearches.map((item, index) => (
          <div
            key={index}
            className="min-w-[150px] bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 flex-shrink-0"
          >
            <h3 className="text-md font-semibold text-gray-800">{item.city}</h3>
            <p className="text-sm text-gray-500">{item.country}</p>
            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
