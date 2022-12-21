import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Grid, Button, Paper } from "@mui/material";
const ImgBackground = require("../public/assets/imgBack.png") as string;
const ImgUser = require("../public/assets/man.png") as string;
const CriarConta: React.FC = () => {
  const listUser = [];
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [confirm, setConfirm] = useState<string | undefined>("");

  useEffect(() => {});

  const createAccount = () => {
    if (!email || !password || !confirm) {
      alert(`Preencha os campos!`);
    }
    if (Number(password?.length) < 5) {
      alert("A senha precisa ter pelo menos 5 caractéres");
    }
    if (password !== confirm) alert("Senhas não conferem!");

    localStorage.setItem("users", JSON.stringify(email));
  };

  const handleChangeEmail = (ev: any) => {
    const value = ev.target.value;
    setEmail(value);
  };
  const handleChangePassword = (ev: any) => {
    const value = ev.target.value;
    setPassword(value);
  };
  const handleChangeConfirm = (ev: any) => {
    const value = ev.target.value;
    setConfirm(value);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100vh",
        padding: "0 5rem ",
        backgroundColor: "#4253b1",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid>
        <Paper
          square
          elevation={5}
          sx={{
            background: "#ca9a40",
            color: "black",
            borderRadius: "10px ",
            padding: "0 50px 50px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={ImgUser} alt="" />
          </Grid>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Type your e-mail"
              variant="outlined"
              onChange={handleChangeEmail}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
            onChange={handleChangeConfirm}
          >
            <TextField
              id="outlined-password-input"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
            />
          </Box>
          <Box sx={{ textAlign: "center" }} onClick={createAccount}>
            <Button variant="contained">Create account!</Button>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/" variant="body2">
              {"Já possuo conta? Retorna pag Login!"}
            </Link>
          </Box>
        </Paper>
      </Grid>
      <Grid>
        <img src={ImgBackground} alt="" />
      </Grid>
    </Grid>
  );
};
export default CriarConta;
