import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import useObtenerGastos from "../firebase/useObtenerGastos";
export default function ListaGastos() {
  const gastos = useObtenerGastos();
  console.log(gastos);
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos </Titulo>
      </Header>
      <BarraTotalGastado />
    </>
  );
}
