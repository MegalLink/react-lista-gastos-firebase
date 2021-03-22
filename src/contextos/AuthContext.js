import React,{useState,useContext,useEffect} from 'react';
const AuthContext=React.createContext();
import {auth} from '../firebase/firebaseConfig'


//Hook
const useAuth=()=>{
  return useContext(AuthContext);
}

const AuthProvider=({children})=>{
  const [usuario,cambiarUsuario]=useState();
  const [cargando,cambiarCargando]=useState(true);
  //comprobar una sola vez
useEffect(()=>{
 const cancelarSubscripcion= auth.onAuthStateChanged((usuario)=>{
   cambiarUsuario(usuario);
   cambiarCargando(false);
  });
  //se ejecuta cuando se cierra sesión
  return cancelarSubscripcion;
})
  return (
    <AuthContext.Provider value={{usuario:usuario}}>
        { !cargando &&children}
    </AuthContext.Provider>);
}
export {AuthProvider,useAuth};