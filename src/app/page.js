import Hero from "@/components/hero/Hero";
import FindGallery from "@/components/home-container/home-items/FindGallery";
import NearbyRestaurants from "@/components/home-container/home-items/NearbyRestaurants";

export default function Home() {
  return (
    <>
      <Hero /> 
      <FindGallery />
      <NearbyRestaurants/>
    </>
  );
}
