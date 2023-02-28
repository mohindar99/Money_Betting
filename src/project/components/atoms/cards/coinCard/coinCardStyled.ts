import { Card } from "@mui/material";
import { styled } from "@mui/system";

const CardStyled = styled(Card)(({ theme }) => ({
  borderRadius: "15px",
  display: "grid",
  
  [theme.breakpoints.up("xs")]: {
    gridTemplateRows: "50% 50%",
    minHeight: "220px",
    minWidth: "170px",
    padding: "10px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateRows: "60% 40%",
    minHeight: "280px",
    minWidth: "220px",
  },
}));

export { CardStyled };
