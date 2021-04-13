import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { useHistory } from "react-router-dom";
const useObtenerGastoFire = id => {
  const [gasto, cambiarGasto] = useState("");
  const history = useHistory();
  useEffect(() => {
    db.collection("gastos")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          cambiarGasto(doc.data());
        } else {
          history.push("/lista");
        }
      });
  }, [history, id]);
  return [gasto];
};
export default useObtenerGastoFire;
