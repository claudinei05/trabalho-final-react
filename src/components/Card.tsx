import React from "react";
import { Paper, Grid } from "@mui/material";
interface CardProps {
  children: any;
  background: string;
}
const Card: React.FC<CardProps> = ({ children, background }) => {
  return (
    <Grid xs={4}>
      <Paper elevation={3} sx={{ backgroundColor: { background } }}>
        <Grid item sx={{ padding: "50px" }}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
};

export { Card };
