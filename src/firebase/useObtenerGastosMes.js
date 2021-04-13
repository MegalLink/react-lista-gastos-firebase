import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { useAuth } from "../contextos/AuthContext";
const useObtenerGastosMes = () => {
  const [gastos, cambiarGastos] = useState([]);
  const { usuario } = useAuth();
  useEffect(() => {
    const inicioDeMes = getUnixTime(startOfMonth(new Date()));
    const finDeMes = getUnixTime(endOfMonth(new Date()));
    if (usuario) {
      const unsusbscribe = db
        .collection("gastos")
        .orderBy("fecha", "desc")
        .where("fecha", ">=", inicioDeMes)
        .where("fecha", "<=", finDeMes)
        .where("uid", "==", usuario.uid)
        .onSnapshot(snapshot => {
          cambiarGastos(
            snapshot.docs.map(sna => {
              return { ...sna.data(), id: sna.id };
            })
          );
        });
      return unsusbscribe;
    }
  }, [usuario]);
};
export default useObtenerGastosMes;
