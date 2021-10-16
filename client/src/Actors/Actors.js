import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Actors = ({ match }) => {
  const { id } = match.params;
  const [actors, setActors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getActors();
  }, []);
  const getActors = async () => {
    try {
      let res = await axios.get(`/api/movies/${id}/actors`);
      setActors(res.data);
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
      <h1>Actors</h1>
      <ul>
        {actors.map((actor) => (
          <li>
            <a href={`/movies/${id}/actors/${actor.id}`}>
              {actor.first_name} {actor.last_name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Actors;
