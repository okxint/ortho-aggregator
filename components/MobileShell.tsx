"use client";

import { useState } from "react";
import BottomTabBar from "./BottomTabBar";
import MobileSearchOverlay from "./MobileSearchOverlay";

export default function MobileShell() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content from being hidden behind bottom bar */}
      <div className="h-16 md:hidden" />
      <BottomTabBar onSearchOpen={() => setSearchOpen(true)} />
      <MobileSearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
