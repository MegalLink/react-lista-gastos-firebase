import { db } from "./firebaseConfig";
const borrarGastoFire = id => {
  db.collection("gastos")
    .doc(id)
    .delete();
};
export default borrarGastoFire;
