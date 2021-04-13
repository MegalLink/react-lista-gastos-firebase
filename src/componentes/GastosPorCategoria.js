import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGasto";
import formatearCantidad from '../pipes/formatearCantidad'
import {
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Valor
} from "../elementos/ElementosDeLista";
import useObtenerGastosMesCategoria from "../firebase/useObtenerGastosMesCategoria";
export default function GastosPorCategoria() {
  const gastos = useObtenerGastosMesCategoria();
  const categorias = [
    { id: "comida", texto: "Comida", icon: "utensils" },
    { id: "cuentas y pagos", texto: "Cuentas y pagos", icon: "cash-register" },
    { id: "hogar", texto: "Hogar", icon: "home" },
    { id: "transporte", texto: "Transporte", icon: "car-side" },
    { id: "ropa", texto: "Ropa", icon: "utensils" },
    { id: "salud e higiene", texto: "Salud e Higiene", icon: "tshirt" },
    { id: "compras", texto: "Compras", icon: "shopping-cart" },
    { id: "diversion", texto: "Diversion", icon: "futbol" }
  ];
 
  const gastosIcon = gastos.map(gasto => {
    var gastoIcon = null;
    categorias.forEach(icon => {
      if (gasto.categoria == icon.id) {
        gastoIcon = {
          ...gasto,
          icon: icon.icon
        };
      }
    });
    return gastoIcon;
  });
 
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Gastos por Categoria en este mes </Titulo>
      </Header>
      <ListaDeCategorias />
      {gastosIcon.map((el, index) => {
        return (
          <ElementoListaCategorias key={index}>
            <Categoria>
              <i className={"mr fas fa-" + el.icon} />
              {el.categoria}
            </Categoria>
            <Valor>{formatearCantidad(el.suma)}</Valor>
          </ElementoListaCategorias>
        );
      })}

      <BarraTotalGastado />
    </>
  );
}
