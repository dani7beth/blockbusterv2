import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, PageItem, Pagination } from "react-bootstrap";

const Actor = (props) => {
  const { id, movie_id } = props.match.params;
  const [actor, setActor] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  const [awards, setAwards] = useState([]);
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getActor();
    getAwards();
  }, []);

  const getActor = async () => {
    try {
      let res = await axios.get(`/api/movies/${movie_id}/actors/${id}`);
      setActor(res.data);
    } catch (error) {
      setErrorMessage(error.message);
      setToggle(!toggle);
      setTimeout(() => {
        setToggle(false);
      }, 5000);
    }
  };
  const getAwards = async () => {
    try {
      let res = await axios.get("/api/awards");
      setAwards(res.data.filter(({ actor_id }) => actor_id == id));
    } catch (error) {
      setErrorMessage(error.message);
      setToggle(!toggle);
      setTimeout(() => {
        setToggle(false);
      }, 5000);
    }
  };
  const renderTopAwards = () => {
    let newArr = awards.slice(0, 10);
    return newArr.map((award) => {
      return (
        <p>
          {award.name} - {award.title}
        </p>
      );
    });
  };

  return (
    <>
      <Alert variant="danger" show={toggle}>
        {errorMessage}
      </Alert>
      <p onClick={() => props.history.goBack()}>Back</p>
      <h1>
        {actor.first_name} {actor.last_name}
      </h1>
      <h3>{actor.age}</h3>
      <h4>Total Awards</h4>
      <p>{awards.length}</p>
      <h4>Top 10 Awards</h4>
      {renderTopAwards()}
    </>
  );
};
export default Actor;
