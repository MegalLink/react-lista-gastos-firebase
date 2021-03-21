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
            <Boton to="/lista"> Gastos <i class="ml fas fa-money-check"></i></Boton>
            <Boton to="/categorias"> Categorias<i class="ml fas fa-th-list"></i></Boton>
            <Boton to="/login"> <i class="ml fas fa-sign-out-alt"></i></Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}
