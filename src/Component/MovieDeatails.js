import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDeatails = () => {
  const param = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovieDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en`
      );
      setMovie(res.data);
    } catch (err) {
      setError('Failed to load movie data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [param.id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img className="img-movie w-30" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={`Poster ${movie.original_title}`}/>
            <div className="flex justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom text-light">Movie name : {movie.original_title}</p>
              <p className="card-text-details border-bottom text-light">Film history: {movie.release_date}</p>
              <p className="card-text-details border-bottom text-light">Number of residents: {movie.vote_count}</p>
              <p className="card-text-details border-bottom text-light">Rate: {movie.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story p-4 d-flex flex-column align-items-start">
            <p className="card-text-title border-bottom text-light">The story:</p>
            <p className="card-text-title">{movie.overview}</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
          <Link to="/"><button style={{ backgroundColor: "red", border: "none" }} className="btn btn-primary mx-2 my-5" >Back Home</button></Link>
          <a href={movie.homepage}><button style={{ backgroundColor: "red", border: "none" }} className="btn btn-primary mx-2 my-5" >Watch Movie</button></a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDeatails;
