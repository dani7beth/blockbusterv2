import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import "../Styles/stores.css";

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

  return (
    <>
      <Alert variant="danger" show={toggle}>
        {errorMessage}
      </Alert>
      <Title>View Our Stores</Title>
      <Card className="card">
        <ListGroup variant="flush">
          {stores.map((store) => (
            <StyledListItem>
              <a href={`/stores/${store.id}`}>{store.name}</a>
            </StyledListItem>
          ))}
        </ListGroup>
      </Card>
    </>
  );
};
export default Stores;

const Title = styled.h1`
  color: red;
  font-size: 60px;
  font-family: "Oswald";
`;

const StyledListItem = styled(ListGroup.Item)`
  background-color: white;
`;
