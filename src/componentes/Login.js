import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import styled from "styled-components";
import Boton from "../elementos/Boton";
import {
  Formulario,
  Input,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
const Imagen = styled.img`
  height: auto;
  width: 200px;
  margin: auto;
`;
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
            <Boton to="/register">Crear cuenta</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Crystal_Clear_app_Login_Manager.svg/1200px-Crystal_Clear_app_Login_Manager.svg.png" />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />

        <ContenedorBoton>
          <Boton type="submit" primario>
            Iniciar sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}
