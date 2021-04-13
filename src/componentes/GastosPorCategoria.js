import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";

export default function GastosPorCategoria() {
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
