import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import styled from "styled-components";
import Boton from "../elementos/Boton";
import {
  Formulario,
  Input,
  ContenedorBoton
} from "../elementos/ElementosDeFormulario";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
const Imagen = styled.img`
  height: auto;
  width: 200px;
  margin: auto;
`;
export default function Login() {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  function handleChange(e) {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      case "password":
        establecerPassword(e.target.value);
        break;
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const er = new RegExp(/[a-zA-Z0-9_.+-]+@\w+\.\w+/);
    if (correo === "" || password === "" ) {   
      Swal.fire({
        title: 'Error',
        text: 'Porfavor llene todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return; //Sale de la función
    }
    if (!er.test(correo)) {
      Swal.fire({
        title: 'Error',
        text: 'Porfavor ingresa un correo electrónico valido',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      
      return; //Sale de la función
    }

   
    
     auth.signInWithEmailAndPassword(correo, password).then(
       ()=>{  history.push("/");}      
     ).catch((err)=>{
Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      })
       
      
  } 
    
  
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
      <Formulario onSubmit={handleSubmit}>
        <Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Crystal_Clear_app_Login_Manager.svg/1200px-Crystal_Clear_app_Login_Manager.svg.png" />
        <Input value={correo} onChange={handleChange} type="email" name="email" placeholder="Correo Electronico" />
        <Input value={password} type="password" name="password" onChange={handleChange} placeholder="Contraseña" />

        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Iniciar sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}
