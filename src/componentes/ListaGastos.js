import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from '../contextos/AuthContext'
export default function ListaGastos() {
 
  const {usuario}=useAuth();
 
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos </Titulo>
      </Header>
    </>
  );
}
