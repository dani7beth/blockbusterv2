import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ match }) => {
  const { id, store_id } = match.params;
  const [movie, setMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    try {
      let res = await axios.get(`/api/stores/${store_id}/movies/${id}`);
      setMovie(res.data);
    } catch (error) {
      setErrorMessage(error.message);
      setToggle(!toggle);
      setTimeout(() => {
        setToggle(false);
      }, 5000);
    }
  };
  return (
    <>
      <Alert variant="danger" show={toggle}>
        {errorMessage}
      </Alert>
      <h1>{movie.title}</h1>
      <Link to={`/stores/${store_id}/movies`}>Back</Link>
      <p>{movie.description}</p>
      <p>{movie.genre}</p>
      <p>Duration: {movie.duration}</p>
      <p>${movie.price}</p>
      <h3>Actors</h3>
    </>
  );
};
export default Movie;
