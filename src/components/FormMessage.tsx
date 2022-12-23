import { Button, Grid, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { addRecados } from "../store/modules/ListaRecadosSlice";
import FormMessageType from "../types/FormMessageType";
import { useAppDispatch } from "../store/hooks";
const FormMessage: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [detailing, setDetailing] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddMessage = useCallback((massage: FormMessageType) => {
    dispatch(addRecados(massage));
  }, []);

  return (
    <Grid container spacing={2} alignItems={"center"}>
      <Grid
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          onChange={(ev) => setDescription(ev.target.value)}
          label="description"
          value={description}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          onChange={(ev) => setDetailing(ev.target.value)}
          label="detailing"
          value={detailing}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item>
            <Button
              onClick={() => handleAddMessage({ description, detailing })}
              variant="contained"
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormMessage;
