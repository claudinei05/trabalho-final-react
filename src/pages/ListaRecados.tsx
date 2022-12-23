import React, { useCallback } from "react";
import {
  Card,
  Grid,
  Button,
  Paper,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteRecados,
  selectRecados,
} from "../store/modules/ListaRecadosSlice";
import FormMessage from "../components/FormMessage";

const ListaRecados: React.FC = () => {
  const allrecafosRedux = useAppSelector(selectRecados);
  const dispatch = useAppDispatch();
  console.log(allrecafosRedux);
  const recDelete = useCallback((description: string) => {
    dispatch(deleteRecados(description));
  }, []);
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
            <Grid container>
              <FormMessage />
              {allrecafosRedux.map((item) => {
                return (
                  <Grid
                    item
                    xs={2}
                    sx={{
                      margin: "3px",
                    }}
                  >
                    <Card>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        ></Typography>
                        <Typography variant="h4" component="div">
                          {item.description}
                        </Typography>
                        <Typography variant="body2">
                          {item.detailing}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant="outlined" startIcon={<EditIcon />}>
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => recDelete(item.description)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ListaRecados;
