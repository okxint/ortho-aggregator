"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CityId, supportedCities } from "@/lib/data";

interface CityContextValue {
  city: CityId;
  setCity: (city: CityId) => void;
  cityName: string;
}

const CityContext = createContext<CityContextValue>({
  city: "pondicherry",
  setCity: () => {},
  cityName: "Pondicherry",
});

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCityState] = useState<CityId>("pondicherry");

  useEffect(() => {
    const saved = localStorage.getItem("ortho-city") as CityId | null;
    if (saved && supportedCities.some((c) => c.id === saved)) {
      setCityState(saved);
    }
  }, []);

  const setCity = (c: CityId) => {
    setCityState(c);
    localStorage.setItem("ortho-city", c);
  };

  const cityName = supportedCities.find((c) => c.id === city)?.name || "Pondicherry";

  return (
    <CityContext.Provider value={{ city, setCity, cityName }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
