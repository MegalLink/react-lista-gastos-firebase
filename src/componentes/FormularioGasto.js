import React, { useState } from "react";
import Swal from "sweetalert2";

import { useAuth } from "../contextos/AuthContext";

import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
import Boton from "../elementos/Boton";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import agregarGastoFire from "../firebase/agregarGastoFire";
const FormularioGasto = () => {
  const [descripcion, cambiarDescripcion] = useState("");
  const [cantidad, cambiarCantidad] = useState("");
  const [categoria, cambiarCategoria] = useState("hogar");
  const [fecha, cambiarFecha] = useState(new Date());
  const handleChange = e => {
    if (e.target.name === "descripcion") {
      cambiarDescripcion(e.target.value);
    } else if (e.target.name === "valor") {
      //Todo lo que no sea números remplazarlo por un espacio vacio
      cambiarCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };
  const { usuario } = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    if (descripcion != "" && cantidad > 0) {
      agregarGastoFire(categoria, descripcion, cantidad, fecha, usuario.uid);
      cambiarDescripcion("");
      cambiarCantidad("");
      cambiarCategoria("hogar");
      cambiarFecha(new Date());
    }
    if (descripcion == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor llene el campo de descripción"
      });
    }
    if (cantidad <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor ingrese un valor mayor que 0"
      });
    }
  };
  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
        <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
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
