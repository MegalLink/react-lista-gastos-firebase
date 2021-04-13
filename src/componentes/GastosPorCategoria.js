import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import useObtenerGastosMesCategoria from "../firebase/useObtenerGastosMesCategoria";
export default function GastosPorCategoria() {
  const gastos = useObtenerGastosMesCategoria();
  console.log(gastos)
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Gastos por Categoria </Titulo>
      </Header>
      <BarraTotalGastado />
    </>
  );
}
