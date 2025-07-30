import { AirplayIcon } from "lucide-react";
import FeaturesSection from "../components/FeaturesSection";
import Hero from "../components/Hero";
import RecentSearches from "../components/RecentSearches";
import AIFeatures from "../components/AIFeatures";
import Footer from "../components/Footer";

// src/pages/Home.jsx
export default function Home() {
  return (
 <>
   <Hero/>
   <FeaturesSection/>
   <RecentSearches/>
   <AIFeatures/>
   <Footer/>
 </>
  );
}
