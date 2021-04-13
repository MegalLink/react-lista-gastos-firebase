import { db } from "./firebaseConfig";
import Swal from "sweetalert2";
import getUnixTime from "date-fns/getUnixTime";

const agregarGastoFire = (
  categoria,
  descripcion,
  cantidad,
  fecha,
  uid,
  icono
) => {
  db.collection("gastos")
    .add({
      categoria,
      descripcion,
      cantidad: parseFloat(cantidad).toFixed(2),
      fecha: getUnixTime(fecha),
      uid,
      icono
    })
    .then(res => {
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Gasto agregado",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo agregar el gasto"
      });
    });
};
export default agregarGastoFire;
