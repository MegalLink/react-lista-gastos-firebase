import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { useAuth } from "../contextos/AuthContext";
const useObtenerGastos = () => {
  const [gastos, cambiarGastos] = useState([]);
  const { usuario } = useAuth();

  useEffect(() => {
    //On snapshot nos permite ejecutar una función cada vez que se detecte un cambio en la db
    const unsusbscribe = db
      .collection("gastos")
      .where("uid", "==", usuario.uid)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot(snapshot => {
        cambiarGastos(
          snapshot.docs.map(gasto => {
            return { ...gasto.data(), id: gasto.id };
          })
        );
      });
    return unsusbscribe; //para retornar cuando se desmonta el componente
  }, [usuario]); //Se ejecuta al inicio o cuando el usuario cambie
  return gastos;
};
export default useObtenerGastos;
