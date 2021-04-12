import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import useObtenerGastos from "../firebase/useObtenerGastos";
import formatearCantidad from "../pipes/formatearCantidad";
import { Link } from "react-router-dom";
import Boton from "../elementos/Boton";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
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
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();
  const formatearFecha = fecha => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
      locale: es
    });
  };
  const fechaEsIgual = (gastos, indexActual, gasto) => {
    if (indexActual !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaAnterior = formatearFecha(gastos[indexActual - 1].fecha);
      if (fechaActual === fechaAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };
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
        {gastos.map((gasto, index) => {
          return (
            <div key={gasto.id}>
              {!fechaEsIgual(gastos, index, gasto) && (
                <Fecha>{formatearFecha(gasto.fecha)}</Fecha>
              )}
              <ElementoLista>
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
            </div>
          );
        })}
        {hayMasPorCargar && (
          <ContenedorBotonCentral>
            <BotonCargarMas onClick={() => obtenerMasGastos()}>
              Cargar más
            </BotonCargarMas>
          </ContenedorBotonCentral>
        )}

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
