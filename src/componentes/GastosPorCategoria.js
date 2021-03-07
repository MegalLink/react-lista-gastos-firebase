import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones
} from "../elementos/Header";
export default function GastosPorCategoria() {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto </Titulo>
        </ContenedorHeader>
      </Header>
    </>
  );
}
