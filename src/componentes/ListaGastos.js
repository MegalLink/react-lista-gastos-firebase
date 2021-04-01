import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import useObtenerGastos from "../firebase/useObtenerGastos";
import formatearCantidad from "../pipes/formatearCantidad";
import { Link } from "react-router-dom";
import Boton from "../elementos/Boton";
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo
} from "../elementos/ElementosDeLista";
export default function ListaGastos() {
  const gastos = useObtenerGastos();

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos </Titulo>
      </Header>
      <Lista>
        {gastos.map(gasto => {
          return (
            <ElementoLista key={gasto.id}>
              <Categoria>
                <i className={"mr fas fa-" + gasto.icono} />
                {gasto.categoria}
              </Categoria>
              <Descripcion>{gasto.descripcion}</Descripcion>
              <Valor>{formatearCantidad(gasto.cantidad)}</Valor>
              <ContenedorBotones>
                <BotonAccion as={Link} to={`editar/${gasto.id}`}>
                  <i className="fas fa-pencil-alt" />
                </BotonAccion>
                <BotonAccion>
                  <i className="fas fa-trash-alt" />
                </BotonAccion>
              </ContenedorBotones>
            </ElementoLista>
          );
        })}
        <ContenedorBotonCentral>
          <BotonCargarMas>Cargar más</BotonCargarMas>
        </ContenedorBotonCentral>
        {gastos.length == 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar</Subtitulo>
            <Boton as={Link} to="/">
              Agregar gasto
            </Boton>
          </ContenedorSubtitulo>
        )}
      </Lista>
      <BarraTotalGastado />
    </>
  );
}
