import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import FormularioGasto from "./FormularioGasto";
import { useParams } from "react-router-dom";
import useObtenerGastoFire from "../firebase/useObtenerGastoFire";
export default function EditarGasto() {
  const { id } = useParams();

  const gasto = useObtenerGastoFire(id);

  return (
    <>
      <Helmet>
        <title>Editar Gasto</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/lista" />
        <Titulo>Editar Gasto </Titulo>
      </Header>
       <FormularioGasto gasto={gasto[0]} id={id} />

      <BarraTotalGastado />
    </>
  );
}
