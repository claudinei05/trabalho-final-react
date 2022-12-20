import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: orange[900],
  },

  borderRadius: "10px",
  width: "5rem",
  marginBottom: "1rem",
}));

interface ButtonDefaultProps {
  label: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ label }) => {
  return <ButtonStyled>{label}</ButtonStyled>;
};

export default ButtonDefault;
