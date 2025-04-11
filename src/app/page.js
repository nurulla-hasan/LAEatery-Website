import Hero from "@/components/hero/Hero";
import CuisineSection from "@/components/home-container/home-items/CuisineSection";
import FindGallery from "@/components/home-container/home-items/FindGallery";
import NearbyRestaurants from "@/components/home-container/home-items/NearbyRestaurants";
import VibeSection from "@/components/home-container/home-items/VibeSection";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <FindGallery />
        <NearbyRestaurants />
        <VibeSection />
        <CuisineSection />
      </div>
    </>
  );
}
