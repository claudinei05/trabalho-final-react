import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Grid, Button, Paper } from "@mui/material";
const ImgBackground = require("../public/assets/imgBack.png") as string;
const ImgUser = require("../public/assets/man.png") as string;
const CriarConta: React.FC = () => {
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
          <Grid>
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
            />
          </Box>
          <Box sx={{ textAlign: "center", color: "#d6e6f5" }}>
            <Button variant="contained">Create account!</Button>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/login" variant="body2">
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
