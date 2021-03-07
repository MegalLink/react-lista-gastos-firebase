import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";
const Btn = styled.button`
  display: block;
  width: 3.12rem; /* 50px */
  height: 3.12rem; /* 50px */
  line-height: 3.12rem; /* 50px */
  text-align: center;
  margin-right: 1.25rem; /* 20px */
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.31rem; /* 5px */
  cursor: pointer;
  font-size: 1.25rem;
  @media (max-width: 60rem) {
    /* 950px */
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
  }
`;
const BtnRegresar = ({ ruta = "/" }) => {
  const history = useHistory();
  return (
    <Btn
      onClick={() => {
        history.push(ruta);
      }}
    >
      <i className="fas fa-arrow-left"  />
    </Btn>
  );
};
export default BtnRegresar;
