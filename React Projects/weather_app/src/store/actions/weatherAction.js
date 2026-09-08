import { axiosConfig } from "../../config/axiosConfig";
import {
  FETCH_FORCAST_ERROR,
  FETCH_FORCAST_PENDING,
  FETCH_FORCAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../constants/weatherConstants";

export function fetchWeatherPanding() {
  return {
    type: FETCH_WEATHER_PENDING,
  };
}

export function fetchWeatherSucsess(data) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
}

export function fetchWeatherError(error) {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
}

export function fetchForcastPanding() {
  return {
    type: FETCH_FORCAST_PENDING,
  };
}

export function fetchForcastSucsess(data) {
  return {
    type: FETCH_FORCAST_SUCCESS,
    payload: data,
  };
}

export function fetchForcastError(error) {
  return {
    type: FETCH_FORCAST_ERROR,
    payload: error,
  };
}

export function setCity(city) {
  return {
    type: SET_CITY,
    payload: city,
  };
}

export function fetchWeatherData(city) {
  return async (dispatch) => {
    dispatch(fetchWeatherPanding());

    try {
      const weatherResponse = await axiosConfig.get(
        `/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`,
      );

      dispatch(fetchWeatherSucsess(weatherResponse.data));
    } catch (err) {
      dispatch(fetchWeatherError("something went going to be wrong!"));
    }
  };
}

export function fetchForcastData(city) {
  return async (dispatch) => {
    dispatch(fetchForcastPanding());

    try {
      const forcastResponse = await axiosConfig.get(
        `/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`,
      );

      dispatch(fetchForcastSucsess(forcastResponse.data.list));
    } catch (err) {
      dispatch(fetchForcastError("something went going to be wrong!"));
    }
  };
}
