import { db } from "./firebaseConfig";
import Swal from "sweetalert2";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
const agregarGastoFire = (categoria, descripcion, cantidad, fecha, uid) => {
  db.collection("gastos")
    .add({
      categoria,
      descripcion,
      cantidad: parseFloat(cantidad).toFixed(2),
      fecha: getUnixTime(fecha),
      uid
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
      console.error(err);
    });
};
export default agregarGastoFire;
