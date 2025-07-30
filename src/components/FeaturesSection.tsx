import { BarChart2, Landmark, Route, Shield } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
    title: "Real-time Insights",
    description: "Live updates on weather, demographics, and more",
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    title: "Local Intelligence",
    description: "Deep dive into culture, traditions, and lifestyle",
  },
  {
    icon: <Route className="w-8 h-8 text-blue-600" />,
    title: "Travel Planning",
    description: "Smart routes and transportation options",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Emergency Info",
    description: "Quick access to essential services",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start justify-start space-y-3 transition hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
