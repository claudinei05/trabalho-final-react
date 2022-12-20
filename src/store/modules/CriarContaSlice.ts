import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateAccount {
  email: string;
  password: string;
  confpassword: string;
  logged: boolean;
}

const initialState: CreateAccount = {
  email: "",
  password: "",
  confpassword: "",
  logged: false,
};

const CriarContaSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action: PayloadAction<CreateAccount>) {
      return action.payload;
    },
    logoff() {
      return initialState;
    },
  },
});

export const { login, logoff } = CriarContaSlice.actions;
export default CriarContaSlice.reducer;
