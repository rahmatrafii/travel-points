import Navbar from "@/components/Navbar";
import HomeSection from "@/sections/home-section";
import Category from "@/sections/Category";

import Image from "next/image";
import Services from "@/sections/Services";
import TopDestinations from "@/sections/top-destination";
import TravelPoints from "@/sections/travel-points";
import KeyFeatures from "@/sections/key-feature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <div className="px-7 md:px-16 py-14 lg:py-20">
        <HomeSection />
        <Category />
        <Services />
        <TopDestinations />
        <TravelPoints />
        <KeyFeatures />
      </div>
      <Footer />
    </main>
  );
}
