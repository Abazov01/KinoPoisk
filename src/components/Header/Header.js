import React, { useEffect, useState } from "react";
import "./Header.css";
import { getAllFilms, searchFilms } from "./../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  const click = (e) => {
    e.preventDefault();
    dispatch(searchFilms(value));
    navigate("/");
  };
  return (
    <div className="header">
      <div className="container header__row">
        <div className="header__logo header__start">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1011/1011958.png?w=360"
            alt="Woop's"
          />
        </div>
        <div className="header__center">
          <form onSubmit={(e) => click(e)} className="header__form" action="">
            <input
              onChange={(e) => setValue(e.target.value)}
              className="header__input"
              type="text"
            />
            <button type="submit" className="form__logo">
              <img
                src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
                alt=""
              />
            </button>
          </form>
          <div className="header__menu">
            <a href="#">MenuI</a>
            <a href="#">MenuI</a>
            <a href="#">MenuI</a>
            <a href="#">MenuI</a>
            <a href="#">MenuI</a>
          </div>
        </div>
        <div className="header__end">
          <a href="#">RU</a>
          <h3 className="slash"> / </h3>
          <a href="#">EN</a>
        </div>
      </div>
    </div>
  );
}
