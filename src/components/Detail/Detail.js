import React from "react";
import "./Detail.css";
import video from "../../videos/abstract_-_2127 (Original).mp4";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Detail() {
  const data = useSelector((r) => r.detail);
  console.log(data);
  return (
    <div className="main">
      <video autoPlay loop muted className="back-video">
        <source className="vid" src={video} type={"video/mp4"} />
      </video>
      <div className="container detail__row">
        <div className="detail__left">
          <img src={data.posterUrl} alt="" />
        </div>
        <div className="detail__right">
          <h1 className="detail__title">{data.nameRu}</h1>
          <p className="desc">{data.description}</p>
          <a className="a" target="_blank" href={data.webUrl}>
            <button className="detail__show">Смотреть</button>
          </a>
        </div>
      </div>
    </div>
  );
}
