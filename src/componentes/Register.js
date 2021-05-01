import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import styled from "styled-components";
import Boton from "../elementos/Boton";
import Swal from "sweetalert2";
import {
  Formulario,
  Input,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
import { auth } from "../firebase/firebaseConfig";

const Imagen = styled.img`
  height: auto;
  width: 200px;
  margin: auto;
`;
export default function Register() {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");

  function handleChange(e) {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      case "password":
        establecerPassword(e.target.value);
        break;
      case "password2":
        establecerPassword2(e.target.value);
        break;
      default:
        break;
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const er = new RegExp(/[a-zA-Z0-9_.+-]+@\w+\.\w+/);
    if (correo === "" || password === "" || password2 === "") {
      Swal.fire({
        title: "Error",
        text: "Porfavor llene todos los campos",
        icon: "error",
        confirmButtonText: "Ok"
      });
      return; //Sale de la función
    }
    if (!er.test(correo)) {
      Swal.fire({
        title: "Error",
        text: "Porfavor ingresa un correo electrónico valido",
        icon: "error",
        confirmButtonText: "Ok"
      });

      return; //Sale de la función
    }

    if (password !== password2) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Ok"
      });

      return; //Sale de la función
    }
    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      Swal.fire({
        title: "Exito",
        text: "Usuario creado con exito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        history.push("/");
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok"
      });
    }
  }
  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <div>
            <Titulo>Crear cuenta </Titulo>
            <Boton to="/login">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Crystal_Clear_app_Login_Manager.svg/1200px-Crystal_Clear_app_Login_Manager.svg.png" />

        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={correo}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirmar contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Crear cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}
