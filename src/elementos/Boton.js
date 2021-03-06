import {Link} from "react-router-dom";
import styled from "styled-components";
const Boton = styled(Link)`
  background: ${props => (props.primario ? "#5B69E2" : "#000")};
  width: auto;
  margin-left: 1.25rem; /* 20px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: #fff;
  font-family: "Work Sans", sans-serif;
  height: 3.75rem; /* 60px */
  padding: 1.25rem 1.87rem; /* 20px 30px */
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  margin-bottom: 1rem;
`;
export default Boton;
