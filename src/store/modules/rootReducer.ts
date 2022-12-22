import { combineReducers } from "@reduxjs/toolkit";

//import recados from "./ListaRecadosSlice";
import userslice from "./UserSlice";

export default combineReducers({
  userslice,
  // recados,
});
