import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

const getWeatherIcon = (code: number) => {
  if (code === 0)
    return <WbSunnyIcon sx={{ fontSize: 60, color: "#ffb300" }} />;
  if (code < 50) return <CloudIcon sx={{ fontSize: 60, color: "#90a4ae" }} />;
  return <UmbrellaIcon sx={{ fontSize: 60, color: "#0288d1" }} />;
};

const WeatherCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ pb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, opacity: 0.9 }}>
          {data.city}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" my={3}>
          {getWeatherIcon(data.weathercode)}
          <Typography variant="h2" sx={{ ml: 2, fontWeight: 700 }}>
            {Math.round(data.temp)}°
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: 2,
                p: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.85, mb: 0.5 }}>
                Viento
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {data.windspeed} km/h
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: 2,
                p: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.85, mb: 0.5 }}>
                Código WMO
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                #{data.weathercode}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
