import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Store = ({ match }) => {
  const { id } = match.params;
  const [store, setStore] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getStore();
  }, []);

  const getStore = async () => {
    try {
      let res = await axios.get(`/api/stores/${id}`);
      // console.log(res.data);
      setStore(res.data);
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
      <h1>{store.name}</h1>
      <p>{store.location}</p>
      <h4>Hours</h4>
      <div>
        {store.open_time} - {store.close_time}
      </div>
      <h4>Movies</h4>
      <Link to={`/stores/${id}/movies`} style={{ textDecoration: "none" }}>
        Check Out Movies
      </Link>
    </>
  );
};
export default Store;
