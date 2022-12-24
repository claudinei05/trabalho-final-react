import React from "react";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ListaRecTypes } from "../../types";

const adapter = createEntityAdapter<ListaRecTypes>({
  selectId: (item) => item.description,
});

export const { selectAll: selectRecados, selectById: selectRecadosById } =
  adapter.getSelectors((state: RootState) => state.recados);

const sliceNameSlice = createSlice({
  name: "recados",
  initialState: adapter.getInitialState(),
  reducers: {
    addRecados: adapter.addOne,
    addMany: adapter.addMany,
    updateRecados: adapter.updateOne,
    deleteRecados: adapter.removeOne,
  },
});

export const { addRecados, addMany, updateRecados, deleteRecados } =
  sliceNameSlice.actions;
export default sliceNameSlice.reducer;
