import { CheckCircle } from "lucide-react";

export default function AIFeatures() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 px-6 py-10 bg-white rounded-xl shadow-sm pt-28">
      
      {/* Left Card */}
      <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2 text-sm">
            💬
          </div>
          <h3 className="text-md font-semibold text-gray-700">
            Ask me anything about any location!
          </h3>
        </div>
        <p className="text-gray-500 text-sm mb-3">
          Type your question and get instant AI-powered answers...
        </p>

        {/* Real Input Field */}
        <input
          type="text"
          placeholder='Try asking: “What’s the best time to visit Paris?”'
          className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Right Features List */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          AI-Powered Features
        </h2>
        <ul className="space-y-3 text-gray-700">
          {[
            "Ask anything about any location",
            "Get personalized travel recommendations",
            "Real-time language translation",
            "Cultural insights and local tips",
            "Weather and climate information",
            "Local business recommendations",
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 mt-[2px]" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
