import React from "react";
import { useSelector } from "react-redux";

function ForcastDetails() {
  const forcastData = useSelector((state) => state.forcast);

  return (
    <div className="card bg-neutral text-neutral-content w-full sm:w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold text-2xl">Forcast Detail</h2>
        <div className="mt-4">
          {forcastData?.map((forcast, index) => (
            <div key={index} className="flex items-center gap-4">
              <p>{forcast.dt_txt}</p>
              <p className="border-x-2 border-neutral-50/10 px-4">
                {(forcast.main.temp - 273).toFixed(1)}°C
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`}
                alt="icon"
                className="w-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForcastDetails;
