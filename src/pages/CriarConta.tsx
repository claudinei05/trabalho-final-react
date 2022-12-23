import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Grid, Button, Paper } from "@mui/material";

import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";

import { adduser } from "../store/modules/UserSlice";

const ImgBackground = require("../public/assets/imgBack.png") as string;
const ImgUser = require("../public/assets/man.png") as string;
const CriarConta: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confpassword, setConfirmPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateAcccount = () => {
    if (email === "" || name === "" || password === "") {
      alert("Fill in the fields!");
    }
    if (password.length < 5 || confpassword.length < 5) {
      alert("Password needs at least 5 characters");
      return;
    }
    if (password !== confpassword) {
      alert("Passwords do not match.");
      return;
    }
    if (email.length && password.length && name.length && confpassword.length) {
      dispatch(adduser({ name, email, password, logged: false }));
      navigate("/");
    }
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
            <TextField
              id="outlined-basic"
              label="Name"
              onChange={(ev) => setName(ev.target.value)}
              value={name}
              variant="outlined"
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
              id="outlined-basic"
              label="Type your e-mail"
              variant="outlined"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
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
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
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
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              value={confpassword}
            />
          </Box>
          <Box sx={{ textAlign: "center" }} onClick={handleCreateAcccount}>
            <Button variant="contained">Create account!</Button>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/" variant="body2">
              {"Already have an account? Returns to Login!"}
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
