import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchForcastData,
  fetchWeatherData,
  setCity,
} from "../store/actions/weatherAction";

function WeatherSearch() {
  const cityName = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const InputRef = useRef();

  function handleWeatherInput(e) {
    dispatch(setCity(e.target.value));
  }

  function handleFetchData(city) {
    dispatch(fetchForcastData(city));
    dispatch(fetchWeatherData(city));
    InputRef.current.value = "";
  }

  return (
    <div className="join max-sm:w-full">
      <label className="input outline-none sm:min-w-75">
        <IoSearch className="h-[1em] opacity-50" />
        <input
          ref={InputRef}
          type="search"
          required
          placeholder="Search"
          onChange={handleWeatherInput}
          className="capitalize"
        />
      </label>
      <button
        className="btn btn-info join-item border border-info"
        onClick={() => handleFetchData(cityName)}
      >
        Fetch
      </button>
    </div>
  );
}

export default WeatherSearch;
