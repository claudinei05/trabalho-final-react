import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Grid, Button, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { selectUser, updateOne } from "../store/modules/UserSlice";

const ImgBackground = require("../public/assets/imgBack.png") as string;
const ImgUser = require("../public/assets/man.png") as string;
const Login: React.FC = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userRedux = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userLogged = userRedux.findIndex((user) => user.logged);

    if (userLogged !== -1) {
      navigate("/listarecados");
    }
  }, [userRedux, navigate]);

  const handleLogin = () => {
    if (usuario === "" || password === "") {
      alert("Fill in the E-mail and Password field!");
    }
    const userExist = userRedux.findIndex((user) => user.usuario === usuario);
    if (userExist === -1) {
      return alert("User not registered");
    }
    const passwordExist = userRedux[userExist].password === password;
    if (!passwordExist) {
      return alert("Password not registered");
    }

    dispatch(updateOne({ id: usuario, changes: { logged: true } }));
  };
  return (
    <Grid container>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          padding: "0 20px ",
          backgroundColor: "#4253b1",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <img src={ImgBackground} alt="" />
        </Grid>
        <Grid>
          <Paper
            square
            elevation={0}
            sx={{
              background: "#ca9a40",
              color: "black",
              borderRadius: "10px ",
              padding: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={ImgUser} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0px",
              }}
            >
              <h2>Errand List</h2>
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                onChange={(ev) => setUsuario(ev.target.value)}
                label="User"
                variant="outlined"
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                onChange={(ev) => setPassword(ev.target.value)}
                label="Password"
                variant="outlined"
                sx={{}}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained" onClick={handleLogin}>
                login
              </Button>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Link href="/criarconta" variant="body2">
                {"Do not have an account yet? Create an account!"}
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Login;
