import { Card } from "@mui/material";
import { styled } from "@mui/system";

const CustomImageCard = styled(Card)(({ theme }) => ({
  borderRadius: "6px",
  position: "relative",
  padding: "12px 10px",
  // border: `14px solid ${theme.palette.primary.main}`,

  [theme.breakpoints.up("xs")]: {
    maxWidth: "none",
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
    // width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "40px",
    width: "50%",
  },
}));

export { CustomImageCard };
