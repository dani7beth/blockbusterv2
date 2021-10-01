import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    try {
      let res = await axios.get("/api/stores");
      // console.log(res.data);
      setStores(res.data);
    } catch (error) {
      setErrorMessage(error.message);
      setToggle(!toggle);
      setTimeout(() => {
        setToggle(false);
      }, 5000);
    }
  };

  const renderStores = () => {};
  return (
    <>
      <Alert variant="danger" show={toggle}>
        {errorMessage}
      </Alert>
      <h1>View Our Stores</h1>
      <ul>
        {stores.map((store) => (
          <li>
            <a href={`/stores/${store.id}`}>{store.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Stores;
