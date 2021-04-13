import { useEffect, useState } from "react";
import useObtenerGastosMes from "./useObtenerGastosMes";
const useObtenerGastosMesCategoria = () => {
  const [gastosCategoria, cambiarGastosCategoria] = useState([]);
  const gastos = useObtenerGastosMes();
  useEffect(()=>{
const sumaGastos= gastos.reduce((total={},gasto)=>{
   var cantidadActual=gasto.cantidad
   var categoriaActual=gasto.categoria
   total[categoriaActual]+=Number(cantidadActual)
   return total
  },{
    'comida': 0,
    'cuentas y pagos': 0,
    'hogar': 0,
    'transporte': 0,
    'ropa': 0,
    'salud e higiene': 0,
    'compras': 0,
'diversion': 0,
  });
  //tomar las propiedades y transformar a elementos de un arreglo
  cambiarGastosCategoria(Object.keys(sumaGastos).map((item)=>{return {categoria:item,suma:sumaGastos[item]} }))
  
  },[cambiarGastosCategoria,gastos])
 
  return gastosCategoria;
};
export default useObtenerGastosMesCategoria;
