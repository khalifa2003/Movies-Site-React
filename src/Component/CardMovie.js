import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" xl="2" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder-image.jpg'} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Name : {movie.original_title}</p>
              <p>Release date: {movie.release_date}</p>
              <p>Number of residents: {movie.vote_count}</p>
              <p>Rate: {movie.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
