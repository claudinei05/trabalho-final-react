import { combineReducers } from "@reduxjs/toolkit";
import login from "./LoginSlice";
import criarconta from "./CriarContaSlice";
import recados from "./ListaRecadosSlice";

export default combineReducers({
  criarconta,
  login,
  recados,
});
