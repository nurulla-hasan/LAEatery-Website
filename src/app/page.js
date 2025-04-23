"use client";
import Hero from "@/components/hero/Hero";
import CuisineSection from "@/components/home-container/home-items/CuisineSection";
import FindGallery from "@/components/home-container/home-items/FindGallery";
import NearbyRestaurants from "@/components/home-container/home-items/NearbyRestaurants";
import VibeSection from "@/components/home-container/home-items/VibeSection";
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Home() {

  const isChatted = useSelector((state) => state.ai.isChatted);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/' && isChatted === false) {
      router.replace('/ai-chat-history');
    }
  }, [isChatted, pathname, router]);
  

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
