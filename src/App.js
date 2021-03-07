import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones
} from "./elementos/Header";
import Boton from "./elementos/Boton";
export default function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto </Titulo>
          <ContenedorBotones>
          <Boton to="/lista"> Categorías</Boton>
          <Boton to="/categorias"> Lista Gastos</Boton>
          <Boton > X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}
