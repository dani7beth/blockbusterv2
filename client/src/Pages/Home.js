import React from "react";
import Taco from "./taco";
import styled from "styled-components";

const Home = () => {
  //flexbox
  //justify -> main axis
  //align -> cross axis

  // if column main axis is the vertical and cross is horiz
  // if row main axis is horizontal and cross is vertical
  return (
    <>
      <h1>Home</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Taco /> */}
        <Box1>div 1</Box1>
        <Box2>div 2</Box2>
        <Box3>div 3</Box3>
      </div>
    </>
  );
};
export default Home;

const Box1 = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;
const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background-color: yellow;
  align-self: flex-end;
`;
const Box3 = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
`;
