import { API, API_URL_POPULAR, API_URL_SEARCH, API_KEY } from "../config";
import {
  FILMS_BY_NAME,
  FILMS_POPULAR,
  FILM_DETAIL,
  CLEAR_FILM,
} from "../reducers/type";
import axios from "axios";

export const getAllFilms = () => {
  return async (dispatch) => {
    const res = await axios.get(API_URL_POPULAR, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    dispatch({
        type: FILMS_POPULAR,
        payload: res.data.films
    })
  };
};

export const searchFilms = (name) => {
  return async (dispatch) => {
    const res = await axios.get(API_URL_SEARCH + name + "&page=1", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    dispatch({
      type: FILMS_BY_NAME,
      payload: res.data.films,
    });
  };
};

export const getFilmById = (id) => {
  return async (dispatch) => {
    const res = await axios.get(API + id, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    dispatch({
      type: FILM_DETAIL,
      payload: res.data,
    });
  };
};
