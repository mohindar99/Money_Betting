import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const GridDisplayBox = styled(Box)(({ theme }) => ({
  display: "grid",
  marginBottom:'30px',
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "auto auto",
    justifyContent: "center",
    gap:'10px',
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "auto auto",
    justifyContent: "center",
    gap:'20px',
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "auto auto auto auto",
    gap:'30px',
  },
  
}));

export { GridDisplayBox };
