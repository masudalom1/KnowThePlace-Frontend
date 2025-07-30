import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">KnowThe Place</h2>
          <p className="text-sm mt-2 text-gray-400">
            Your AI-powered travel planner – Explore smarter, travel better.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Destinations</a></li>
            <li><a href="#" className="hover:text-white">Plan Trip</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              support@knowtheplace.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              +91 9999999999
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              Guwahati, Assam, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KnowThe Place. All rights reserved.
      </div>
    </footer>
  );
}
