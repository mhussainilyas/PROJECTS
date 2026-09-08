import {
  FETCH_FORCAST_ERROR,
  FETCH_FORCAST_PENDING,
  FETCH_FORCAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../constants/weatherConstants";

const initialState = {
  city: "Lahore",
  current: null,
  forcast: null,
  loading: false,
  error: null,
};

function weatherReducer(state = initialState, action) {
  if (action.type === FETCH_WEATHER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_WEATHER_SUCCESS) {
    return {
      ...state,
      loading: false,
      current: action.payload,
    };
  } else if (action.type === FETCH_WEATHER_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else if (action.type === FETCH_FORCAST_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_FORCAST_SUCCESS) {
    return {
      ...state,
      loading: false,
      forcast: action.payload,
    };
  } else if (action.type === FETCH_FORCAST_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else {
    return state;
  }
}

export default weatherReducer;
