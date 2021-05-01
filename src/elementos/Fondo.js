import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  height: auto%;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: #d38312;
  }
`;
const Fondo = () => {
  return (
    <div>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,80C672,64,768,96,864,117.3C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Svg>
    </div>
  );
};
export default Fondo;
