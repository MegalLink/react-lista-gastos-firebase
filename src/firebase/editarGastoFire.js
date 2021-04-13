import { db } from "./firebaseConfig";
import Swal from "sweetalert2";
import getUnixTime from "date-fns/getUnixTime";

const editarGastoFire = (
  id,
  categoria,
  descripcion,
  cantidad,
  fecha,
  icono
) => {
  db.collection("gastos")
    .doc(id)
    .update({
      categoria,
      descripcion,
      cantidad: parseFloat(cantidad).toFixed(2),
      fecha: getUnixTime(fecha),
      icono
    })
    .then(res => {
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Gasto editado",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo editar el gasto"
      });
    });
};
export default editarGastoFire;
