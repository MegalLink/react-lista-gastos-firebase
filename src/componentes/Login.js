import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";

import Boton from "../elementos/Boton";
import {
  Formulario,
  Input,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
export default function Login() {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <div>
            <Titulo>Iniciar Sesión </Titulo>
            <Boton to="/login">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Crystal_Clear_app_Login_Manager.svg/1200px-Crystal_Clear_app_Login_Manager.svg.png"
          Style="height:auto;width:200px;margin:auto;"
        />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />

        <ContenedorBoton>
          <Boton type="submit" primario>
            Inicar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}
