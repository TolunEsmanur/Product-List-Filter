import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = ({categoriess}) => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row">
        {
          categoriess.map((a,index)=>(
            <button key= {index}>{a}</button>
          )
          )
        }
      </Stack>
    </Container>
  );
};
