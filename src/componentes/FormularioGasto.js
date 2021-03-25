import React, { useState } from "react";
import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
import Boton from "../elementos/Boton";
const FormularioGasto = () => {
  const [descripcion, cambiarDescripcion] = useState("");
  const [cantidad, cambiarCantidad] = useState("");
  const handleChange = e => {
    if (e.target.name === "descripcion") {
      cambiarDescripcion(e.target.value);
    } else if (e.target.name === "valor") {
      //Todo lo que no sea números remplazarlo por un espacio vacio
      cambiarCantidad(e.target.value.replace(/[^0-9.]/g,''));
    }
    console.log(cantidad) 
    console.log(descripcion)
  };
  return (
    <Formulario>
      <ContenedorFiltros>
        <p>Select</p>
        <p>Date Picker </p>
      </ContenedorFiltros>
      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripción"
          value={descripcion}
          onChange={handleChange}
        />
        <InputGrande
          type="text"
          name="valor"
          id="valor"
          placeholder="$0.00"
          value={cantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario type="submit">
          Agregar gasto <i className="fas fa-plus ml" />
        </Boton>
      </ContenedorBoton>
    </Formulario>
  );
};
export default FormularioGasto;
