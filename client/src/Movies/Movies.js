import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movies = ({ match }) => {
  const { id } = match.params;
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/stores/${id}/movies`);
      setMovies(res.data);
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
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h5>{movie.title}</h5>
          <p>{movie.description}</p>
          <p>${movie.price}</p>
          <Button>
            <Link
              to={`/stores/${id}/movies/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Check me Out
            </Link>
          </Button>
        </div>
      ))}
    </>
  );
};
export default Movies;
