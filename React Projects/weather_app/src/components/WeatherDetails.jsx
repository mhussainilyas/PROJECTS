import React from "react";
import { useSelector } from "react-redux";

function WeatherDetails() {
  const weatherData = useSelector((state) => state.current);
  const weatherIcon = weatherData?.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="card bg-neutral text-neutral-content w-full sm:w-96">
      <div className="card-body items-center text-center">
        <img src={iconUrl} alt="weather_icon" />
        <h2 className="card-title font-normal text-xl">{weatherData?.name}</h2>
        <h4 className="text-2xl sm:text-3xl font-semibold">
          {weatherData?.weather[0].description}
        </h4>
        <div className="grid grid-cols-2 w-full mt-3 max-sm:text-sm">
          <p className="border-r-2 border-neutral-content/50">
            Pressure - {weatherData?.main.pressure} Pa
          </p>
          <p>Temperature - {(weatherData?.main.temp - 273).toFixed(1)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
