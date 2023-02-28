import { Card, Stack } from "@mui/material";
import { styled } from "@mui/system";

const CustomStack = styled(Stack)(({ theme }) => ({
  padding: "12px 10px",
  borderRadius: "10px",
  minHeight: "400px",
  width: "90%",

  [theme.breakpoints.up("xs")]: {
    maxWidth: "none",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "none",
    width: "100%",
    justifyContent: "center",
    alignItems: "normal",
    flexDirection: "row",
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 30px",
  margin: "10px 0px",
  borderRadius: "18px",

  [theme.breakpoints.up("xs")]: {
    maxWidth: "none",
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));

export { CustomStack, CustomCard };
