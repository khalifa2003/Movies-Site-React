import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDeatails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);
  // Get Movie By Deatails
  const getMovieDeatails = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        param.id +
        "?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=ar"
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDeatails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex alighn-items-center">
            <img
              className="img-movie w-30"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt=""
            />
            <div className="flex justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom text-light">
                إسم الفيلم: {movie.original_title}
              </p>
              <p className="card-text-details border-bottom text-light">
                تاريخ الفيلم: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom text-light">
                عدد المقييمين: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom text-light">
                التقييم: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom text-light">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-title">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "red", border: "none" }}
              className="btn btn-primary mx-2 my-5"
            >
              عودة للرئيسية
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "red", border: "none" }}
              className="btn btn-primary mx-2 my-5"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDeatails;
