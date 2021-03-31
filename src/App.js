import React from "react";
import { Helmet } from "react-helmet";
import { auth } from "./firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones
} from "./elementos/Header";
import FormularioGasto from "./componentes/FormularioGasto";
import Boton from "./elementos/Boton";
export default function App() {
  const history = useHistory();
  const cerrarSesion = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/login");
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <ContenedorBotones>
            <Titulo>Agregar Gasto </Titulo>
            <Boton to="/lista">
              {" "}
              Gastos <i className="ml fas fa-money-check" />
            </Boton>
            <Boton to="/categorias">
              {" "}
              Categorias
              <i className="ml fas fa-th-list" />
            </Boton>
            <Boton as="button" to="/login" onClick={cerrarSesion}>
              {" "}
              <i className="ml fas fa-sign-out-alt" />
            </Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormularioGasto />
    </>
  );
}
