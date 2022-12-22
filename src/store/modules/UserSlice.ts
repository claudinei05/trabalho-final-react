import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import UserTypes from "../../types/UserTypes";

const adapter = createEntityAdapter<UserTypes>({
  selectId: (item) => item.email,
});

export const { selectAll: selectUser, selectById: selectByIdUser } =
  adapter.getSelectors((state: RootState) => state.userslice);

const userslice = createSlice({
  name: "userslice",
  initialState: adapter.getInitialState(),
  reducers: {
    adduser: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { adduser, addMany, updateOne } = userslice.actions;
export default userslice.reducer;
