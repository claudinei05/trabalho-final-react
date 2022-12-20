import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Button, Paper } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import FormDialog from "../components/FormDialog";
const ListaRecados: React.FC = () => {
  return (
    <Grid container>
      <ResponsiveAppBar />
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          padding: "0 5rem ",
          backgroundColor: "#4253b1",
        }}
        justifyContent="center"
      >
        <Grid>
          <Paper
            square
            elevation={0}
            sx={{
              background: "#ca9a40",
              color: "black",
              borderRadius: "10px ",
              padding: "50px",
              margin: "15px",
            }}
          >
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
                label="Description"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Detailing"
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{
                  padding: "5px",
                  backgroundColor: "burlywood",
                  m: "0 170px",
                  width: "10vh",
                }}
              >
                Save Messages!
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ListaRecados;
