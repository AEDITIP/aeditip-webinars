import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface WeatherContextType {
  unit: "celsius" | "fahrenheit";
  toggleUnit: () => void;
  history: string[];
  addToHistory: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<"celsius" | "fahrenheit">("celsius");
  const [history, setHistory] = useState<string[]>([]);

  const toggleUnit = () =>
    setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));
  const addToHistory = (city: string) => {
    setHistory((prev) => Array.from(new Set([city, ...prev])).slice(0, 5));
  };

  return (
    <WeatherContext.Provider
      value={{ unit, toggleUnit, history, addToHistory }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeather debe usarse dentro de WeatherProvider");
  return context;
};
