import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from '../contextos/AuthContext'
import FormularioGasto from './FormularioGasto'
export default function ListaGastos() {
 
  const {usuario}=useAuth();
  console.log(usuario)
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos </Titulo>
      </Header>
      <FormularioGasto/>

    </>
  );
}
