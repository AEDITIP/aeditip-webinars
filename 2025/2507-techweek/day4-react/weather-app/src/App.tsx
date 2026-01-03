import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Switch,
  FormControlLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import { WeatherProvider, useWeather } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const WeatherApp = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastCity, setLastCity] = useState<string | null>(null);
  const { unit, toggleUnit, addToHistory } = useWeather();

  const handleSearch = async (city: string) => {
    setLastCity(city);
    setLoading(true);
    setError(null);
    try {
      // 1. Geocoding API: Nombre -> Lat/Lon
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results) throw new Error("Ciudad no encontrada");

      const { latitude, longitude, name } = geoData.results[0];

      // 2. Weather API: Lat/Lon -> Clima
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${unit}`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        temp: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode,
      });
      addToHistory(name);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lastCity && weather) {
      handleSearch(lastCity);
    }
  }, [unit]);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MeteoReact
        </Typography>
        <FormControlLabel
          control={
            <Switch checked={unit === "fahrenheit"} onChange={toggleUnit} />
          }
          label={unit === "celsius" ? "°C" : "°F"}
          sx={{ fontWeight: 500 }}
        />
      </Box>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      {weather && !loading && <WeatherCard data={weather} />}
    </Container>
  );
};

export default () => (
  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>
);
