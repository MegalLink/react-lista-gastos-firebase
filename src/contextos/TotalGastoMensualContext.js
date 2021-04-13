import React, { useState, useEffect, useContext } from "react";
import useObtenerGastosMes from "../firebase/useObtenerGastosMes";
const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => {
  return useContext(TotalGastadoContext);
};
const TotalGastadoProvider = ({ children }) => {
  const [total, cambiarTotal] = useState(10);
  const gastos = useObtenerGastosMes();
  useEffect(() => {
    let acumulado = 0;
    gastos.forEach(gasto => {
      acumulado += Number(gasto.cantidad);
    });
    cambiarTotal(acumulado);
  }, [gastos]);
  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};
export { TotalGastadoProvider, useTotalDelMes };
