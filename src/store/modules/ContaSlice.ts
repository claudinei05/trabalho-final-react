import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateAccount {
  name: string;
  email: string;
  password: string;
  confpassword: string;
  logged: boolean;
}

const initialState: CreateAccount = {
  name: "",
  email: "",
  password: "",
  confpassword: "",
  logged: false,
};

const CriarContaSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    criarConta(state, action: PayloadAction<CreateAccount>) {
      return action.payload;
    },
  },
});

export const { criarConta } = CriarContaSlice.actions;
export default CriarContaSlice.reducer;
