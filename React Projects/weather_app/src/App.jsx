import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchForcastData,
  fetchWeatherData,
} from "./store/actions/weatherAction";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";
import ForcastDetails from "./components/ForcastDetails";

function App() {
  const cityName = useSelector((state) => state.city);
  const loader = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(cityName));
    dispatch(fetchForcastData(cityName));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="overflow-x-hidden">
      <div className="w-full py-10 px-4 flex flex-col items-center sticky top-0 z-10 bg-base-100">
        <h1 className="text-2xl font-semibold uppercase mb-5">
          Weather Forcast
        </h1>
        <WeatherSearch />
      </div>
      <div className="px-4 pb-10 flex flex-col items-center gap-10">
        {loader ? (
          <h1>Loading data...</h1>
        ) : (
          <>
            <WeatherDetails />
            <ForcastDetails />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
