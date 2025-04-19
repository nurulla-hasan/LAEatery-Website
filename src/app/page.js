"use client";
import Hero from "@/components/hero/Hero";
import CuisineSection from "@/components/home-container/home-items/CuisineSection";
import FindGallery from "@/components/home-container/home-items/FindGallery";
import NearbyRestaurants from "@/components/home-container/home-items/NearbyRestaurants";
import VibeSection from "@/components/home-container/home-items/VibeSection";
// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';

export default function Home() {

  // const hasChatted = useSelector((state) => state.ui.hasChatted);
  // const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname === '/' && hasChatted === false) {
  //     router.replace('/ai-chat');
  //   }else{
  //     router.replace('/')
  //   }
  // }, [hasChatted, pathname]);

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
